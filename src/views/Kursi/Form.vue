<template>
  <div>
    <div class="createheader">
      <span>Kurs qo'shish</span>
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
          <label>Kurs</label>
          <n-input
            type="text"
            v-model:value="Data.name"
            clearable
            size="large"
            placeholder="Kursni kiriting"
          />
        </div>
        <div class="nuqtabtn">
          <label>Kafedra</label>
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
                    <tr class="tableTR" @click="resData(keyword, item)" v-for="(item, index) in optionsData" :key="index">
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
              <Kafedra @kafedra="resData" />
            </n-card>
          </n-modal>
          <n-select
            :options="optionsData"
            v-model:value="Data.collage_id"
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
        <n-button @click="createData" size="large" type="success">
          Saqlash
        </n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { h, ref, onMounted, defineEmits } from "vue";
import { useRoute, useRouter } from "vue-router";
import {AddCircleSharp} from "@vicons/ionicons5"
import Kafedra from "../Kafedra/Form.vue";
import axios from "axios";
import { useMessage } from "naive-ui";
const Data = ref({
  name: "",
  collage_id: null,
});
const route = useRoute();
const router = useRouter();
const message = useMessage();
const props = defineProps(['id'])
const emit = defineEmits(["kurs"]);
const showModal = ref(false);
const showModalTable = ref(false);
const resData = (key, data) => {
  if (data) {
    Data.value.collage_id = data.id;
    getKafedra();
    showModal.value = false;
    showModalTable.value = false;
  } else {
    showModal.value = false;
    showModalTable.value = false;
  }
};

const optionsData = ref([]);
const createData = () => {
  if (props.id) {
    axios.patch(`course/update/` + props.id, Data.value).then((res) => {
      if (res.data) {
        let key = false;
        emit('kurs', key)
        // router.push({ path: "/course" });
      }
    });
  } else {
    axios.post("course/create", Data.value).then((res) => {
      if (res.data) {
        let key = "course_id";
        emit("kurs", key, res.data);
      }
    });
  }
};
const close = () => {
  Data.value = {
    name: "",
    collage_id: null,
  };
};
const getKafedra = () => {
  axios.get("/kafedra/all").then((res) => {
    if (res) {
      optionsData.value = res.data;
    }
  });
};
const getOne = () => {
  if (props.id) {
    axios.get(`course/one/` + props.id).then((res) => {
      if (res) {
        Data.value = res.data;
      }
    });
  }
};
const ortga = () => {
    let key = false;
    emit("kurs", key);
};
onMounted(() => {
  getOne();
  getKafedra();
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
//   height: calc(100vh - 140px);
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
