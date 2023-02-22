<template>
  <div>
    <div class="createheader">
      <span>Guruh qo'shish</span>
      <!-- <div>
                <n-button size="large" type="error">
                    <n-icon size="25">
                        <CloseCircleSharp/>
                    </n-icon>
                </n-button>
            </div> -->
    </div>
    <div class="classinputlar">
      <div style="display: flex; justify-content: space-between">
        <div style="width: 49%">
          <label>Guruh nomi</label>
          <n-input
            type="text"
            v-model:value="Group.name"
            clearable
            size="large"
            placeholder="Guruhni kiriting"
          />
        </div>
        <div class="nuqtabtn">
          <label>Kursi</label>
          <button @click="showModalTable = true">...</button>
          <n-modal v-model:show="showModalTable">
            <n-card
              style="width: 900px; padding: 0px !important;"
              :bordered="false"
              title="Ro'yxat"
              size="huge"
              role="dialog"
              aria-modal="true"
              closable
              @close="(showModalTable = false)"
            >
            <!-- <button @click="showModal = true"></button> -->
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
              <n-button color="#c63131" size="large" ghost @click="(showModal = true)">
                <n-icon size="30">
                  <AddCircleSharp />
                </n-icon>
              </n-button>
              <div class="btninputs">
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
                      <th class="tableThLeftRadius" style="width: 10px">№</th>
                      <th class="tableThRightRadius">Nomi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="tableTR" @click="resData(keyword, item)" v-for="(item, index) in optionsKurs" :key="index">
                      <td class="tableTdLeftRadius">{{ 1 + index }}</td>
                      <td class="tableTdRightRadius">{{ item.name }}</td>
                    </tr>
                  </tbody>
                </n-table>
              </n-space>
            </div>
            
            </n-card>
          </n-modal>
          <n-modal v-model:show="showModal">
            <n-card
              style="width: 600px"
              :bordered="false"
              size="huge"
              role="dialog"
              aria-modal="true"
              closable
              @close="(showModal = false)"
            >
              <Kurs @kurs="resData" />
            </n-card>
          </n-modal>
          <n-select
            :options="optionsKurs"
            v-model:value="Group.course_id"
            size="large"
            label-field="name"
            value-field="id"
            filterable
            clearable
          />
        </div>
      </div>

      <div class="saqlashbtn">
        <n-button @click="ortga" size="large"> Ortga </n-button>
        <n-button @click="close" size="large" type="error"> Tozalash </n-button>
        <n-button @click="createGroup" size="large" type="success">
          Saqlash
        </n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Kurs from "../Kursi/Form.vue";
import { h, ref, onMounted, defineEmits } from "vue";
import { useRoute, useRouter } from "vue-router";
import {AddCircleSharp} from "@vicons/ionicons5"
import axios from "axios";
const props = defineProps(['id'])
const route = useRoute();
const router = useRouter();
const optionsKurs = ref([]);
const showModal = ref(false);
const showModalTable = ref(false);
// const DataTable = ([])
const emit = defineEmits(["guruh"]);
const Group = ref({
  name: "",
  course_id: null,
  direction_id: 0
});
const resData = (key, data) => {
  if (data) {
    getKurs();
    Group.value.course_id = data.id;
    showModal.value = false;
    showModalTable.value = false;
  } else {
    showModal.value = false;
    showModalTable.value = false;
  }
};
const createGroup = () => {
  // if (route.name == "Guruh qo'shish") {
  //   axios.post("group/create", Group.value).then((res) => {
  //     if (res) {
  //       Group.value = {
  //         name: "",
  //         course_id: null,
  //       };
  //     }
  //   });
  // } else 
  if (props.id) {
    axios.patch(`group/update/` + props.id, Group.value).then((res) => {
      if (res.data) {
        // router.push({ path: "/group" });
        const key = false;
        emit("guruh", key);
      }
    });
  } else {
    axios.post("group/create", Group.value).then((res) => {
      if (res.data) {
        Group.value = {
          name: "",
          course_id: null,
        };
        let key = "group_id";
        emit("guruh", key, res.data);
      }
    });
  }
};
const getKurs = () => {
  axios.get("/course/all").then((res) => {
    if (res) {
      optionsKurs.value = res.data;
    }
  });
};
const close = () => {
  Group.value = {
    name: "",
    course_id: null,
  };
};
const getOne = () => {
  if (props.id) {
    axios.get(`group/one/` + props.id).then((res) => {
      if (res) {
        Group.value = res.data;
      }
    });
  }
};
const ortga = () => {
    const key = false;
    emit("guruh", key);
};
onMounted(() => {
  // console.log(props.id)
  getOne();
  getKurs();
});
</script>

<style lang="scss" scoped>
.btninputs {
  display: flex;
  width: 50%;
}
.n-table td{
  border-radius: 0px !important;
  padding: 10px;
  cursor: pointer;

}
.tableTR{
  border: 2px solid red !important;
}
.createheader {
  margin: 5px auto;
  width: 99%;
  // display: flex;
  // justify-content: space-between;
  span {
    font-size: 27px;
    font-weight: 700;
  }
}
.nuqtabtn {
  width: 49%;
  position: relative;
  button {
    position: absolute;
    top: 33px;
    left: calc(100% - 50px);
    z-index: 5;
    color: #8a8a8a;
    font-weight: 600;
    background: #fff;
    border: none;
  }
}
// .classinputlar {
//   position: relative;
//   margin: 0px auto;
//   width: 99%;
//   border: 1px solid #bfbfbf;
//   border-radius: 5px;
//   padding: 5px 10px;
//   background: #fff;
//   // height: 500px;
//   height: calc(100vh - 240px);
//   label {
//     margin-top: 5px;
//     font-size: 14px;
//     font-weight: 600;
//   }
// }
.saqlashbtn {
  position: absolute;
  bottom: 10px;
  right: 15px;
  display: flex;
  margin-top: 10px;
  margin-bottom: 5px;
  button {
    margin-left: 10px;
  }
}
</style>
