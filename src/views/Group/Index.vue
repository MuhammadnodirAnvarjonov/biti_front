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
      <FormVue @guruh="resData" :id="Id" />
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
              <th>Guruh nomi</th>
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
import { ref, h, onMounted } from "vue";
import { RestoreFromTrashOutlined, CreateTwotone } from "@vicons/material";
import { useMessage, useDialog, NButton, NIcon } from "naive-ui";
const message = useMessage();
const dialog = useDialog();
// const route = useRoute()
const router = useRouter();
const Id = ref(null)
const showModal = ref(false);
// const renderIcon = (icon) => {
//   return () => h(NIcon, null, { default: () => h(icon) });
// };
// const routerPush = () => {
//   router.push({ path: "/group/create" });
// };
  
// const columns = ref([
//   {
//     title: "Guruh nomi",
//     key: "name",
//     width:150,
//     minWidth: 150,
//     maxWidth: 400,
//     resizable: true
//   },
//   {
//     title: "Kursi",
//     key: "course_id",
//     // minWidth: 50,
//     // maxWidth: 100
//   },
//   {
//       title: "Action",
//       key: "actions",
//       render(row) {
        
//         return h(
//           NButton,
//           {
//             strong: true,
//             tertiary: true,
//             size: "",
//             onClick: () => console.log(row)
//           },
//           { default: () => {
//             RestoreFromTrashOutlined
//           } }
//         );
//       }
//     }
// ])
// const pagination = ref({
//   pageSize: 20
// })
const routeUpdate = (id) => {
  Id.value = id;
  showModal.value = true;
  // router.push({ path: "/group/update/" + id });
};
const resData = (key) => {
  get();
  showModal.value = false;
}
const Data = ref();
const get = () => {
  axios.get("/group/all").then((res) => {
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
      axios.delete("/group/delete/" + id).then((res) => {
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
onMounted(() => {
  get();
});
</script>

<style lang="scss">
.btninput {
  display: flex;
  width: 40%;
}
</style>
