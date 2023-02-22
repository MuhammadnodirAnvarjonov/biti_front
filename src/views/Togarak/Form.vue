<template>
  <div>
    <div class="createheader">
      <span>To'garak qo'shish</span>
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
          <label>To'garak nomi</label>
          <n-input
            type="text"
            v-model:value="Data.name"
            clearable
            size="large"
            placeholder="Guruhni kiriting"
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
import axios from "axios";
const route = useRoute();
const router = useRouter();
const emit = defineEmits(["togaraklar"]);
const props = defineProps(['id'])
const Data = ref({
  name: "",
});
const createData = () => {
  // if (route.name == "To'garak qo'shish") {
  //   axios.post("togaraklar/create", Data.value).then((res) => {
  //     if (res) {
  //       Data.value = {
  //         name: "",
  //       };
  //     }
  //   });
  // } else 
  if (props.id) {
    axios
      .patch(`togaraklar/update/` + props.id, Data.value)
      .then((res) => {
        if (res.data) {
          // router.push({ path: "/togarak" });
          let key = false;
          emit('togaraklar', key);
        }
      });
  } else {
    axios.post("togaraklar/create", Data.value).then((res) => {
      if (res.data) {
        let key = "Circle";
        emit("togaraklar", key, res.data);
      }
    });
  }
};
const close = () => {
  Data.value = {
    name: "",
  };
};
const getOne = () => {
  if (props.id) {
    axios.get(`togaraklar/one/` + props.id).then((res) => {
      if (res) {
        Data.value = res.data;
      }
    });
  }
};
const ortga = () => {
    const key = false;
    emit("togaraklar", key);
};
onMounted(() => {
  getOne();
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
// .classinputlar {
//   position: relative;
//   margin: 0px auto;
//   width: 99%;
//   border: 1px solid #bfbfbf;
//   border-radius: 5px;
//   padding: 5px 10px;
//   background: #fff;
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
