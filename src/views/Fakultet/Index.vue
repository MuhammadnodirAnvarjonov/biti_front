<template>
  <div>
    <n-card class="cardTable">
      <div class="cardheader">
        <div>
          <n-button type="error" size="large" @click="showModal = true, Id = null">
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
      <n-modal
        v-model:show="showModal"
        class="custom-card"
        preset="card"
        style="width: 700px;"
        :bordered="false"
        size="huge"
      >
      <FormVue @fakultet="resData" :id="Id" />
      </n-modal>
    <div class="DataTable">
      <!-- <n-data-table
        size="large"
        :columns="columns"
        :data="Data"
        :pagination="pagination"
        :striped="true"
        :bordered="true"
      /> -->
      <n-space vertical >
        <n-table
          striped
        >
          <thead>
            <tr>
              <th class="tableThLeftRadius">№</th>
              <th>Fakultet nomi</th>
              <!-- <th>Kursi</th> -->
              <th class="tableThRightRadius"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in Data" :key="index">
              <td class="tableTdLeftRadius">{{ 1 + index }}</td>
              <td>{{ item.name }}</td>
              <!-- <td>{{ item.course_id }}</td> -->
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
import FormVue from "./Form.vue";
import { AddCircleSharp } from "@vicons/ionicons5";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import { ref, onMounted } from "vue";
import { RestoreFromTrashOutlined, CreateTwotone } from "@vicons/material";
import { useMessage, useDialog } from "naive-ui";
const message = useMessage();
const dialog = useDialog();
// const route = useRoute()
const Id = ref(null)
const showModal = ref(false);

const router = useRouter();
const route = useRoute();
const handleConfirm = ref();
// const routerPush = () => {
//   router.push({ path: "/collage/create" });
// };
const routeUpdate = (id) => {
  Id.value = id;
  showModal.value = true;
  // router.push({ path: "/collage/update/" + id });
};
const resData = (key) => {
  get();
  showModal.value = false;
}
const get = () => {
  axios.get("/collage/all").then((res) => {
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
      axios.delete("/collage/delete/" + id).then((res) => {
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
