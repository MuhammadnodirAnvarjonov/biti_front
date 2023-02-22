<template>
  <div>
    <div class="createheader">
      <span>Bo'nuslar qo'shish</span>
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
          <label>Bo'nus nomi</label>
          <n-input
            type="text"
            v-model:value="Data.name"
            clearable
            size="large"
            placeholder="Bo'nusni kiriting"
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
const props = defineProps(['id'])
const emit = defineEmits(["bonustalaba"]);
const Data = ref({
  name: "",
});
const createData = () => {
  if (props.id) {
    axios
      .patch(`bonus_student/update/` + props.id, Data.value)
      .then((res) => {
        if (res.data) {
          let key = false;
          emit('bonustalaba', key)
          // router.push({ path: "/bonus/student" });
        }
      });
  } else {
    axios.post("bonus_student/create", Data.value).then((res) => {
      if (res.data) {
        let key = "bonus_student";
        emit("bonustalaba", key, res.data);
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
    axios.get(`bonus_student/one/` + props.id).then((res) => {
      if (res) {
        Data.value = res.data;
      }
    });
  }
};
const ortga = () => {
    let key = false;
    emit("bonustalaba", key);
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
