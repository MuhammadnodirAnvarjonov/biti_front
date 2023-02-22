<template>
  <div>
    <n-card class="cardTable">
      <div class="cardheader">
        <div>
            <n-button type="error" size="large" @click="routerPush">
              <n-icon size="30">
                <AddCircleSharp />
              </n-icon>
              Qo'shish
            </n-button>
          </div>
        <div class="btninput">
          <n-input-group>
            <n-input size="large" />
            <n-button size="large" type="error"> Tozalash </n-button>
          </n-input-group>
        </div>
      </div>
      <div class="DataTable">
        <n-space vertical>
          <n-table
            striped
          >
            <thead>
              <tr>
                <th class="tableThLeftRadius">№</th>
                <th>F.I.SH</th>
                <th>O'qituvchi ID</th>
                <th>Ma'lumoti</th>
                <th>Guruh rahbarligi</th>
                <th>Muassasa</th>
                <th  class="tableThRightRadius"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in Data" :key="index">
                <td class="tableTdLeftRadius">{{ 1 + index }}</td>
                <td>{{ item.fullname }}</td>
                <td>{{ item.teacher_id }}</td>
                <td>
                  <span v-if="item.institution">{{ item.institution.name }}</span>
                  <span v-else></span>
                </td>
                <td>
                  <span v-if="item.group_leadership">{{ item.group_leadership.name }}</span>
                  <span v-else></span>
                </td>
                <td>
                  <span v-if="item.institution">{{ item.institution.name }}</span>
                  <span v-else></span>
                </td>
                <td class="tableTdRightRadius">
                  <n-button
                    @click="routeUpdate(item.id)"
                    tertiary
                    circle
                    color="#0042ff"
                    style="border: 1px solid #0042ff; margin-right: 10px"
                  >
                    <n-icon size="25">
                      <CreateTwotone />
                    </n-icon>
                  </n-button>
                  <n-button
                    @click="deletedata(item.id)"
                    tertiary
                    circle
                    type="error"
                    style="border: 1px solid #f93a3a; margin-right: 10px"
                  >
                    <n-icon size="25">
                      <RestoreFromTrashOutlined />
                    </n-icon>
                  </n-button>
                </td>
              </tr>
            </tbody>
          </n-table>
        </n-space>
      </div>
    </n-card>
  </div>
</template>
<script setup>
import { AddCircleSharp } from "@vicons/ionicons5";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import { ref, onMounted } from "vue";
import { RestoreFromTrashOutlined, CreateTwotone } from "@vicons/material";
import { useMessage, useDialog } from "naive-ui";
const message = useMessage();
const dialog = useDialog();
// const route = useRoute()

const router = useRouter();
const handleConfirm = ref();
const routerPush = () => {
  router.push({ path: "/teacher/create" });
};
const routeUpdate = (id) => {
  router.push({ path: "/teacher/update/" + id });
};
const get = () => {
  axios.get("/teacher/all").then((res) => {
    if (res) {
      Data.value = res.data;
    }
  });
};
const deletedata = (id) => {
  dialog.warning({
    title: "Ogohlantirish",
    content: "Ma'lumot o'chirilsinmi",
    positiveText: "O'chirish",
    negativeText: "Bekor qilish",
    onPositiveClick: () => {
      axios.delete("/teacher/delete/" + id).then((res) => {
        if (res) {
          get();
        }
      });
      message.success("O'chirish");
    },
    onNegativeClick: () => {
      message.error("Bekor qilish");
    },
  });
};
const Data = ref();
onMounted(() => {
  get();
});
</script>

<style lang="scss">
.cardheader {
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btninput {
  display: flex;
  width: 40%;
}
</style>
