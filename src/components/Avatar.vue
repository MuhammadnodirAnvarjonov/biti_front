<template>
  <div class="parent">
    <div style="align-items: center; display: flex">
      <img
        style="border-radius: 20%; width: 40px; margin-left: 11px"
        src="../assets/img/biti_uz.jpg"
        alt=""
      />
      <span class="bitispan">BiTi</span>
    </div>
    <div class="profil">
      <div style="align-items: center; display: flex; margin-right: 30px">
        <n-space :size="20" align="center">
          <n-badge :value="10"  processing :max="9" color="#FA5714">
            <n-icon size="35" color="#FAD90A">
              <NotificationsSharp />
            </n-icon>
          </n-badge>
        </n-space>
      </div>
      <div style="margin-right: 10px; display: flex; align-items: center">
        <!-- <n-button @click="showModal = true">
                    Nothing
                </n-button> -->
        <n-modal
          v-model:show="showModal"
          class="custom-card"
          preset="card"
          :style="{ width: '800px', height: '500px' }"
          title="Ma'lumotlar"
        >
          <!-- <template #header-extra> -->
          <img src="../assets/img/personUSer.jpg" alt="" />
          <!-- </template> -->
          <ogohlantirish class="ogoh" />
          <template #footer> Footer </template>
        </n-modal>
        <div class="avatarborder">
          <n-avatar
            round
            @click="showModal = true"
            size="large"
            :src="img"
            :fallback-src="imgperson"
          />
        </div>
      </div>
      <div style="margin-right: 10px">
        <n-dropdown :options="options" :on-select="updateMenu">
          <div style="border-right: 1px solid #D0FF03; padding: 0px 10px">
            <div>
              <span class="ismfamilyasi">Ismi familiyasi sharifi</span>
            </div>
            <div>
              <span class="guruhi">
                <span>Guruhi 123-456 </span><span>Kursi: 3 </span>
              </span>
            </div>
          </div>
        </n-dropdown>
      </div>
    </div>
  </div>
</template>
<script setup>
import imgperson from "../assets/img/person.jpg";
import img from "../assets/img/personUSer.jpg";
import { defineComponent, ref, h } from "vue";
import { NIcon } from "naive-ui";
import { useRoute, useRouter } from "vue-router";
import ogohlantirish from './ogohlantirish.vue'
import {
  PersonCircleOutline as UserIcon,
  AlertCircleOutline as Info,
  LogOutOutline as LogoutIcon,
  NotificationsSharp,
} from "@vicons/ionicons5";
const router = useRouter();
const showModal = ref(false);
const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    });
  };
};

const options = [
  {
    label: "Profil",
    key: "/student/info",
    icon: renderIcon(UserIcon),
  },
  {
    label: "Shaxsiy ma'lumotlar",
    key: "/student/informations",
    icon: renderIcon(Info),
  },
  {
    label: "Logout",
    key: "/login",
    icon: renderIcon(LogoutIcon),
  },
];
const updateMenu = (e) => {
  router.push({ path: e });
};
</script>

<style lang="scss" scoped>
.parent {
  display: flex;
  background: #F01D50;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 5px 3px 3px;
  align-items: center;
  border-bottom: 1px solid #afafaf;
  justify-content: space-between;
  box-shadow: 0px 0px 20px black;
}
.bitispan {
  font-size: 25px;
  font-weight: 800;
  color: #fff;
  margin-left: 10px;
}
.avatarborder {
  padding: 0px 10px;
  border-left: 1px solid #D0FF03;
  border-right: 1px solid #D0FF03;
}
.profil {
  display: flex;
}
.ismfamilyasi {
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  text-transform: uppercase;
}
.guruhi {
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
}
</style>
