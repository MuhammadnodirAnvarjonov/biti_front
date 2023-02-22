<template>
  <div>
    <div>
      <Avatar></Avatar>
    </div>
    <n-divider style="margin: 0" />
    <div style="height: calc(100vh - 60px)">
      <n-space vertical style="height: calc(100vh - 60px) !important">
        <n-layout has-sider style="height: calc(100vh - 60px) !important;">
          <n-layout-sider
            collapse-mode="width"
            :bordered="true"
            :collapsed-width="64"
            :width="250"
            :heigth="100"
            :collapsed="menu_bool"
            show-trigger
            @collapse="menu_bool = true"
            @expand="menu_bool = false"
          >
            <n-menu
              :collapsed="menu_bool"
              :collapsed-width="64"
              :collapsed-icon-size="22"
              :options="menuOptions"
              v-model:value="selectedMenu"
              :onUpdate:value="updateMenu"
            />
          </n-layout-sider>
          <n-layout>
            <div style="padding: 15px;">
              <!-- <n-card size="small" style="height: calc(100vh - 70px)"> -->
                <router-view></router-view>
              <!-- </n-card> -->
            </div>
          </n-layout>
        </n-layout>
      </n-space>
    </div>
  </div>
</template>
<script setup>
import Avatar from "../../components/Avatar.vue";
import { h, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { NIcon } from "naive-ui";
import {
  Analytics,
  Settings,
  SchoolSharp,
  PersonSharp,
  PersonCircleOutline,
} from "@vicons/ionicons5";
import { DashboardRound, GroupsRound, MenuBookRound, DomainAddRound } from "@vicons/material";
import axios from "axios";
const collapsed = ref(true);
const route = useRoute();
const router = useRouter();
const renderIcon = (icon) => {
  return () => h(NIcon, null, { default: () => h(icon) });
};
const menu_bool = ref(true);
const openclose = () => {
  if (menu_bool.value) {
    menu_bool.value = false;
  } else {
    menu_bool.value = true;
  }
};
const updateMenu = () => {
  router.push({ path: selectedMenu.value });
};
const selectedMenu = ref(null);
const emits = defineEmits(["openclose"]);
const menuOptions = ref([
  {
    label: "Home",
    key: "/home",
    icon: renderIcon(DashboardRound),
  },
  {
    label: "Crm",
    key: "/crm",
    icon: renderIcon(Analytics),
  },
  // {
  //   label: "test",
  //   key: "/layout/test",
  //   icon: renderIcon(Analytics),
  // },
  {
    label: "O'qituvchi",
    key: "/teacher",
    icon: renderIcon(PersonSharp),
    children: [
      {
        label: "O'qituvchi qo'shish",
        key: "/teacher",
      },
      {
        label: "Ilmiy unvoni",
        key: "/academic/title",
      },
      {
        label: "Ilmiy daraja",
        key: "/academic/degree"
      },
      {
        label: "Mutahasisligi",
        key: "/special/information",
      },
      {
        label: "Ish tarzi",
        key: "/state",
      },
      {
        label: "Lavozimi",
        key: "/position",
      },
    ],
  },
  {
    label: "Talaba",
    icon: renderIcon(SchoolSharp),
    key: "/teacher/info",
    children: [
      {
        label: "Talaba qo'shish",
        key: "/student"
      },
      {
        label: "Mening ma'lumotlarim",
        key: "/student/info",
        children: [
          {
            label: "Ma'lumotlar",
            key: "/student/info"
          },
          {
            label: "Akademik kalendar",
            key: "/academic/calendar"
          },
          {
            label: "Shaxsiy ma'lumotlar",
            key: "/student/informations"
          },
          {
            label: "Kurs rahbari",
            key: "/head/course"
          },
          {
            label: "Ilmiy rahbari",
            key: "/scientific/director"
          },
        ]
      },

      {
        label: "Fanlar",
        key: "d",
        children: [
          {
            label: "Mening fanlarim",
            key: "/sciences"
          },
          {
            label: "Dars jadvali",
            key: "/schedule"
          },
        ]
      },
      
      {
         label: "Kontrakt info",
         key: "/student/contract",
         children: [
          {
            label: "Shartnomalar",
            key: "/student/contract"
          },
          {
            label: "Shartnomalar(perivod)",
          },
          {
            label: "To'lov tarixi",
          },
          {
            label: "Kantrakt summasi",
          },
         ]
      },
      {
         label: "Kontrakt to'lovi",
         key: "/ss",
         children: [
          {
            label: "Bekor qilish",
          },
          {
            label: "Bekor qilish(to'lv)",
          },
          {
            label: "Bekor qilish(to'lv perexod)",
          }
         ]
      },
      {
        label: "Talaba hujjati",
        key: "/student/document"
      },
      
      {
        label: "Buyruqlar",
        key: "/student/behest"
      },
    ],
  },
  {
    label: "Biti malumotlar",
    key: "/group",
    icon: renderIcon(DomainAddRound),
    children: [
    {
      label: "Guruhlar",
      key: "/group",
    },
    {
      label: "To'garaklar",
      key: "/togarak",
    },
    {
      label: "Ilmiy rahbar",
      key: "/ilmiy/rahbar",
    },
    {
      label: "Kurs",
      key: "/course",
    },
    {
      label: "Fakultet",
      key: "/collage",
    },
    {
      label: "Kafedra",
      key: "/kafedra",
    },
    {
      label: "Dasturlar",
      key: "/programm",
    },
    {
      label: "Tillar",
      key: "/language",
    },
    {
      label: "Guruh rahbari",
      key: "/group/leader",
    },
    {
      label: "Ma'lumoti",
      key: "/information",
    },
    {
      label: "Bo'nus",
      key: "/bonus/student",
    },
    {
      label: "Jarimalar",
      key: "/punishments",
    },
    {
      label: "Millati",
      key: "/national",
    },
    {
      label: "Oilaviy ahvoli",
      key: "/family/status",
    },
    {
      label: "Muassasa",
      key: "/institution",
    },
    {
      label: "Yo'nalish",
      key: "/direction",
    },
    {
      label: "Xona",
      key: "/room",
    },
    {
      label: "Bino",
      key: "/bino",
    },
    ]
  },
  
  {
    label: "Profil",
    icon: renderIcon(PersonCircleOutline),
    key: "/user",
    // children: [
    //   {
    //       label: "Profil",
    //       key: "test1"
    //   }
    // ]
  },
]);
onMounted(() => {
  selectedMenu.value = route.path;
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

.n-menu .n-submenu .n-submenu-children .n-menu-item .n-menu-item-content {
  // font-weight: 600 !important;
  padding-left: 30px !important;
}
.n-menu {

  .n-menu-item{
    height: 40px;
    .n-menu-item-content{
      
      // padding-left: 15px !important;
      .n-menu-item-content__icon{
        font-size: 30px !important;
      }
    }
  }
}
   

.n-menu .n-menu-item-content .n-menu-item-content-header{
  margin-left: 7px;
  font-size: 18px;
  // color: #dcdcdc !important;
}
.n-layout-sider-scroll-container {
  font-weight: 700 !important;
  // line-height: 5px !important;
}
// .n-layout {
//   background-color: rgba(255, 255, 255, 0.159) !important;
// }
.n-layout-sider{
  background-color: rgba(230, 230, 230, 0.241) !important;
}
.n-layout-sider.n-layout-sider--bordered .n-layout-sider__border{
  background-color: rgb(191 191 191) !important;
}
// .n-card{
//   background-color: rgba(255, 255, 255, 0) !important;
// }
// .n-menu.n-menu--collapsed .n-menu-item-content .n-menu-item-content__icon {
//   // color: #fff;
//   font-size: 30px !important;
// }
// .n-layout-sider-scroll-container .n-menu-item-content-header{
//   letter-spacing: 0.5px;
// }
.n-layout-sider .n-layout-toggle-button {
  width: 30px;
  height: 55px;
  font-family: 'Roboto', sans-serif;
  border-radius: 20%;
  // background-color: #ff8383;
  font-size: 30px;
}
.n-submenu .n-submenu-children .n-submenu .n-submenu-children .n-menu-item {
height: 35px !important;  
.n-menu-item-content{
  padding-left: 40px !important;
  height: 35px !important;
  font-size: 18px;
  padding-top: 0px !important
  // border: 1px solid red;
}
}
// .n-submenu .n-submenu-children .n-submenu .n-submenu-children .n-menu-item{
//   height: 35px !important;
//   // border: 1px solid red;
// }
// :root {
//   --n-border-color: #ff8383;
// }
// // .n-space .n-layout .n-layout-sider-scroll-container{
// //   // border: var(--n-border-color);
// // }
// .n-space .n-layout .n-layout-sider {
//   border-right: 1px solid #b7b7b7;
// }
// //   .table-striped tbody tr:nth-of-type(odd) {
// //   background: #f4f9fc;
// // }
</style>
