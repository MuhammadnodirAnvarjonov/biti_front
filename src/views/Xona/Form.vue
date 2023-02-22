<template>
  <div>
    <div class="createheader">
      <span>Xona qo'shish</span>
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
          <label>Xona</label>
          <n-input
            type="text"
            v-model:value="Data.name"
            clearable
            size="large"
            placeholder="Nomini kiriting"
          />
          <label>Qavat</label>
          <n-input
            type="text"
            v-model:value="Data.etaj"
            clearable
            size="large"
            placeholder="Nomini kiriting"
          />
        </div>
        <div class="nuqtabtns" style="width: 49%">
          <label>Bino</label>
          <button
            @click="(showModal = true), (keyword = 'family_status_id')"
          >
            ...
          </button>
          <n-modal v-model:show="showModal" >
            <n-card
              style="width: 1000px;"
              title="Ro'yxat"
              :bordered="true"
              role="dialog"
              aria-modal="true"
              closable
              @close="(showModal = false)"
            >
              <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                <n-button color="#c63131" size="large" ghost @click="(showModalCreate = true)">
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
                <n-space vertical >
                  <n-table
                    striped
                  >
                    <thead>
                      <tr>
                        <th class="tableThLeftRadius" style="width: 10px;">№</th>
                        <th class="tableThRightRadius">Nomi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in bino_idData" :key="index" @click="resData(keyword, item)">
                        <td class="tableTdLeftRadius">{{ 1 + index }}</td>
                        <td class="tableTdRightRadius">{{ item.name }}</td>
                      </tr>
                    </tbody>
                  </n-table>
                </n-space>
              </div>
              
              <!-- <n-data-table
                :columns="createColumns"
                size="large"
                :striped="true"
                :data="bino_idData"
                :pagination="pagination"
                :max-height="350"
                :row-props="rowData(e)"
                :bordered="true"
              /> -->
            </n-card>
          </n-modal>
          <n-modal v-model:show="showModalCreate">
            <n-card
              style="width: 600px"
              :bordered="false"
              size="huge"
              role="dialog"
              aria-modal="true"
            >
              <Bino @bino="resData" />
            </n-card>
          </n-modal>
          <n-select
            v-model:value="Data.bino_id"
            size="large"
            :options="bino_idData"
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
import { AddCircleSharp } from "@vicons/ionicons5";
import Bino from "../Bino/Form.vue"
import axios from "axios";
const route = useRoute();
const router = useRouter();
const props = defineProps(['id']);
const emit = defineEmits(["xona"]);
const showModal = ref(false)
const showModalCreate = ref(false)
const bino_idData = ref([])
const Data = ref({
  name: "",
  etaj: "",
  bino_id: null
});
const resData = (key, data) => {
  if (data) {
    // console.log(data)
    bino_id();
    Data.value.bino_id = data.id;
    showModal.value = false;
    showModalCreate.value = false;
  } else {
    showModal.value = false;
    showModalCreate.value = false;
  }
};
const createData = () => {
  if (props.id) {
    axios.patch(`room/update/` + props.id, Data.value).then((res) => {
      if (res.data) {
        let key = false;
        emit('xona', key);
        // router.push({ path: "/room" });
      }
    });
  } else {
    axios.post("room/create", Data.value).then((res) => {
      if (res.data) {
        let key = "room_id";
        emit("xona", key, res.data);
      }
    });
  }
};
const bino_id = () => {
  axios.get('/bino/all').then(res => {
    if (res){
      bino_idData.value = res.data 
    }
  })
}
const close = () => {
  Data.value = {
    name: "",
    etaj: "",
    bino_id: null
  };
};
const getOne = () => {
  if (props.id) {
    axios.get(`room/one/` + props.id).then((res) => {
      if (res) {
        Data.value = res.data;
      }
    });
  }
};
const ortga = () => {
    let key = false;
    emit("xona", key);
};
onMounted(() => {
  getOne();
  bino_id();
});
</script>

<style lang="scss" scoped>
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
.btninputs {
  display: flex;
  width: 50%;
}
.nuqtabtns {
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
