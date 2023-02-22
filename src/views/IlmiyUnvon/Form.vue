<template>
  <div>
    <div class="createheader">
      <span>Ilmiy unvon qo'shish</span>
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
          <label>Ilmiy unvoni</label>
          <n-input
            type="text"
            v-model:value="Data.name"
            clearable
            size="large"
            placeholder="Nomini kiriting"
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
const emit = defineEmits(["ilmiyunvon"]);
const Data = ref({
  name: "",
});
const createData = () => {
  if (props.id) {
    axios
      .patch(`academic_title/update/` + props.id, Data.value)
      .then((res) => {
        if (res.data) {
          let key = false;
          emit('ilmiyunvon', key);
          // router.push({ path: "/academic/title" });
        }
      });
  } else {
    axios.post("academic_title/create", Data.value).then((res) => {
      if (res.data) {
        let key = "scientific_title_id";
        emit("ilmiyunvon", key, res.data);
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
    axios.get(`academic_title/one/` + props.id).then((res) => {
      if (res) {
        Data.value = res.data;
      }
    });
  }
};
const ortga = () => {
    let key = false;
    emit("ilmiyunvon", key);
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
