<template>
  <div>
    <div class="malumot">
      <div class="sarlovha">
        Mening profilim
      </div>
      <div style="display: flex; justify-content: space-between;">
        <div style="width: calc(100% - 160px);">
          <label>Ismi</label>
          <n-input :disabled="true" type="text" ></n-input>
          <label>Familiya</label>
          <n-input :disabled="true" type="text" ></n-input>
          <label>Login</label>
          <n-input type="text" ></n-input>
        </div>
        <div style="width: 152px; margin-top: 18px;">
          <div style="width: 150px; margin-left: calc(100% - 150px); border-radius: 6px; height: 160px; border: 1px solid #dcdcdc;">

          </div>
        </div>
      </div>
      <div>
        <label>Pasport raqami</label>
        <n-input :disabled="true" type="text"></n-input>
        <label>Talaba telefoni</label>
        <n-input type="text"></n-input>
        <n-checkbox
          style="margin: 10px;"
          :checked-value="true"
          :unchecked-value="false" 
          @update:checked="updateChecked"
          label="Parolni o‘zgartirish" 
        /> <br>
        <label>Yangi parolni kiriting</label>
        <n-input
          type="password"
          :disabled="!checkbox"
          show-password-on="click"
          placeholder="Parolni kiriting"
          :minlength="6"
        >
        </n-input>
        <label>Parolni qayta kiriting</label>
        <n-input type="password" :disabled="!checkbox" placeholder="Parolni qayta kiriting"></n-input>
      </div>
      <div class="malumot-btn">
        <n-button size="large" type="success">
          Saqlash
        </n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue"
// import {GlassesOutline} from "@vicons/ionicons5"
const checkbox = ref(false)
const updateChecked = () => {
  if(checkbox.value == false){
    checkbox.value = true
  } else {
    checkbox.value = false
  }
}
</script>

<style scoped lang="scss">
.sarlovha{
  width: 100%;
  font-size: 20px;
}
.malumot-btn{
  // position: absolute;
  // right: 10px;
  display: flex;
  justify-content: right;
  margin-top: 10px;
}
.malumot{
  // position: relative;
  width: 700px;
  border: 1px solid #adadad;
  border-radius: 6px;
  padding: 10px;
}
label{
  font-weight: 600;
}
</style>