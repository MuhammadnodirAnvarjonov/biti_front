<template>
  <div>
    <div class="createheader">
      <span>Ilmiy rahbar qo'shish</span>
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
          <label>Nomi</label>
          <n-input
            type="text"
            v-model:value="Data.name"
            clearable
            size="small"
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
const emit = defineEmits(["ilmiyrahbarligi"]);
const Data = ref({
  name: "",
});
const createData = () => {
  if (route.name == "Ilmiy rahbarligi qo'shish") {
    axios.post("scientific_leadership/create", Data.value).then((res) => {
      if (res.data) {
        Data.value = {
          name: "",
        };
      }
    });
  } else if (route.name == "Ilmiy rahbarligi qayta nomlash") {
    axios
      .patch(`scientific_leadership/update/` + route.params.id, Data.value)
      .then((res) => {
        if (res.data) {
          router.push({ path: "/scientific/leadership" });
        }
      });
  } else {
    axios.post("punishment/create", Data.value).then((res) => {
      if (res.data) {
        let key = "Circle";
        emit("ilmiyrahbarligi", key, res.data);
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
  if (route.name == "Ilmiy rahbarligi qayta nomlash") {
    axios.get(`punishment/one/` + route.params.id).then((res) => {
      if (res) {
        Data.value = res.data;
      }
    });
  }
};
const ortga = () => {
  if (
    route.name == "Ilmiy rahbarligi qayta nomlash" ||
    route.name == "Ilmiy rahbarligi qo'shish"
  ) {
    router.go(-1);
  } else {
    let key = false;
    emit("ilmiyrahbarligi", key);
  }
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
.classinputlar {
  position: relative;
  margin: 0px auto;
  width: 99%;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  padding: 5px 10px;
  background: #fff;
  height: calc(100vh - 140px);
  label {
    margin-top: 5px;
    font-size: 14px;
    font-weight: 600;
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
