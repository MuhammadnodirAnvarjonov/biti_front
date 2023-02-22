<template>
  <div>
    <div class="cardheader">
      <div>
        <n-button size="large" ghost @click="routerPush" color="#c63131">
          <n-icon size="30">
            <AddCircleSharp />
          </n-icon>
        </n-button>
      </div>
      <div class="btninput">
        <n-input-group>
          <n-input size="large" />
          <n-button size="large" type="error"> Tozalash </n-button>
        </n-input-group>
      </div>
    </div>
    <n-space vertical>
      <n-table
        type="small"
        :striped="true"
        :bottom-bordered="true"
        :bordered="false"
        :single-line="false"
      >
        <thead>
          <tr>
            <th style="width: 30px">№</th>
            <th>Ilmiy rahbarligi</th>
            <th style="width: 150px"></th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in Data" :key="index">
          <tr>
            <td>{{ 1 + index }}</td>
            <td>{{ item.name }}</td>
            <td>
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
  router.push({ path: "/scientific/leadership/create" });
};
const routeUpdate = (id) => {
  router.push({ path: "/scientific/leadership/update/" + id });
};
const get = () => {
  axios.get("/scientific_leadership/all").then((res) => {
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
      axios.delete("/scientific_leadership/delete/" + id).then((res) => {
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
