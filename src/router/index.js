import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/Layout/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "home",
      component: () => import("../views/Layout/Layout.vue"),
      children: [
        {
          path: "home",
          name: "Home",
          component: () => import("../views/Home/Index.vue"),
        },
        {
          path: "crm",
          name: "CRM",
          component: () => import("../views/CRM/index.vue"),
        },
        {
          path: "user",
          name: "User",
          component: () => import("../views/User/Index.vue"),
        },
        {
          path: "teacher",
          name: "Teacher",
          component: () => import("../views/Teacher/Index.vue"),
        },
        {
          path: "teacher/create",
          name: "O'qituvchi ma'lumotlari qo'shish",
          component: () => import("../views/Teacher/Create.vue"),
        },
        {
          path: "teacher/update/:id",
          name: "O'qituvchi ma'lumotlari qayta nomlash",
          component: () => import("../views/Teacher/Update.vue")
        },
        {
          path: "student",
          name: "Talaba",
          component: () => import("../views/Student/Index.vue"),
        },
        {
          path: "student/create",
          name: "Talaba qo'shish",
          component: () => import("../views/Student/Create.vue"),
        },
        {
          path: "student/update/:id",
          name: "Talaba qayta nomlash",
          component: () => import("../views/Student/Update.vue"),
        },
        {
          path: "academic/calendar",
          name: "Akademik kalendar",
          component: () => import("../views/Student/StudentInfo/AkademikKalendar.vue")
        },
        {
          path: "head/course",
          name: "Kurs rahbari",
          component: () => import("../views/Student/StudentInfo/KursRahbari.vue")
        },
        {
          path: "scientific/director",
          name: "Ilmiy rahbari",
          component: () => import("../views/Student/IlmiyRahbari.vue")
        },
        {
          path: "room",
          name: "Xona",
          component: () => import("../views/Xona/Index.vue"),
        },
        {
          path: "room/create",
          name: "Xona qo'shish",
          component: () => import("../views/Xona/Create.vue"),
        },
        {
          path: "room/update/:id",
          name: "Xona qayta nomlash",
          component: () => import("../views/Xona/Update.vue"),
        },
        {
          path: "bino",
          name: "Bino",
          component: () => import("../views/Bino/Index.vue"),
        },
        {
          path: "bino/create",
          name: "Bino qo'shish",
          component: () => import("../views/Bino/Create.vue"),
        },
        {
          path: "bino/update/:id",
          name: "Bino qayta nomlash",
          component: () => import("../views/Bino/Update.vue"),
        },
        {
          path: "student/info",
          name: "StudentInfo",
          component: () => import("../views/Student/StudentInfo/Info.vue"),
        },
        {
          path: "student/informations",
          name: "StudentInformations",
          component: () => import("../views/Student/StudentInfo/PersonalInformation.vue"),
        },
        {
          path: "student/document",
          name: "StudentDocument",
          component: () => import("../views/Student/Document.vue"),
        },
        {
          path: "sciences",
          name: "Fanlar",
          component: () => import("../views/Student/GuruhBaholar/Guruh/MeningFanlarim.vue"),
        },
        {
          path: "schedule",
          name: "Dars jadvali",
          component: () => import("../views/Student/GuruhBaholar/Guruh/DarsJadval.vue"),
        },
        {
          path: "student/contract",
          name: "StudentContract",
          component: () => import("../views/Student/KontraktInfo/Contract.vue"),
        },
        {
          path: "student/behest",
          name: "StudentBehest",
          component: () => import("../views/Student/Behest.vue"),
        },
        {
          path: "group",
          name: "Guruhlar",
          component: () => import("../views/Group/Index.vue"),
        },
        // {
        //   path: "group/create",
        //   name: "Guruh qo'shish",
        //   component: () => import("../views/Group/Create.vue"),
        // },
        // {
        //   path: "group/update/:id",
        //   name: "Guruh qayta nomlash",
        //   component: () => import("../views/Group/Update.vue"),
        // },
        {
          path: "togarak",
          name: "To'garaklar",
          component: () => import("../views/Togarak/Index.vue"),
        },
        {
          path: "togarak/create",
          name: "To'garak qo'shish",
          component: () => import("../views/Togarak/Create.vue"),
        },
        {
          path: "togarak/update/:id",
          name: "To'garakni qayta nomlash",
          component: () => import("../views/Togarak/Update.vue"),
        },
        {
          path: "ilmiy/rahbar",
          name: "Ilmiy rahbar",
          component: () => import("../views/IlmiyRahbar/Index.vue"),
        },
        {
          path: "ilmiy/rahbar/create",
          name: "Ilmiy rahbar qo'shish",
          component: () => import("../views/IlmiyRahbar/Create.vue"),
        },
        {
          path: "ilmiy/rahbar/update/:id",
          name: "Ilmiy rahbar qayta nomlash",
          component: () => import("../views/IlmiyRahbar/Update.vue"),
        },
        {
          path: "course",
          name: "Kursi",
          component: () => import("../views/Kursi/Index.vue"),
        },
        {
          path: "course/create",
          name: "Kurs qo'shish",
          component: () => import("../views/Kursi/Create.vue"),
        },
        {
          path: "course/update/:id",
          name: "Kursni qayta nomlash",
          component: () => import("../views/Kursi/Update.vue"),
        },
        {
          path: "collage",
          name: "Fakultet",
          component: () => import("../views/Fakultet/Index.vue"),
        },
        {
          path: "collage/create",
          name: "Fakultet qo'shish",
          component: () => import("../views/Fakultet/Create.vue"),
        },
        {
          path: "collage/update/:id",
          name: "Fakultet qayta nomlash",
          component: () => import("../views/Fakultet/Update.vue"),
        },
        {
          path: "special/information",
          name: "Mutahasisligi",
          component: () => import("../views/Mutahasisligi/Index.vue"),
        },
        {
          path: "special/information/create",
          name: "Mutahasisligi qo'shish",
          component: () => import("../views/Mutahasisligi/Create.vue"),
        },
        {
          path: "special/information/update/:id",
          name: "Mutahasisligi qayta nomlash",
          component: () => import("../views/Mutahasisligi/Update.vue"),
        },
        {
          path: "kafedra",
          name: "Kafedra",
          component: () => import("../views/Kafedra/Index.vue"),
        },
        {
          path: "kafedra/create",
          name: "Kafedra qo'shish",
          component: () => import("../views/Kafedra/Create.vue"),
        },
        {
          path: "kafedra/update/:id",
          name: "Kafedra qayta nomlash",
          component: () => import("../views/Kafedra/Update.vue"),
        },
        {
          path: "position",
          name: "Lavozim",
          component: () => import("../views/Lavozim/Index.vue"),
        },
        {
          path: "position/create",
          name: "Lavozim qo'shish",
          component: () => import("../views/Lavozim/Create.vue"),
        },
        {
          path: "position/update/:id",
          name: "Lavozim qayta nomlash",
          component: () => import("../views/Lavozim/Update.vue"),
        },
        {
          path: "programm",
          name: "Dasturlar",
          component: () => import("../views/DasturlardaIshlashi/Index.vue"),
        },
        {
          path: "programm/create",
          name: "Dastur qo'shish",
          component: () => import("../views/DasturlardaIshlashi/Create.vue"),
        },
        {
          path: "programm/update/:id",
          name: "Dastur qayta nomlash",
          component: () => import("../views/DasturlardaIshlashi/Update.vue"),
        },
        {
          path: "language",
          name: "Tillar",
          component: () => import("../views/Tillar/Index.vue"),
        },
        {
          path: "language/create",
          name: "Til qo'shish",
          component: () => import("../views/Tillar/Create.vue"),
        },
        {
          path: "language/update/:id",
          name: "Til qayta nomlash",
          component: () => import("../views/Tillar/Update.vue"),
        },
        {
          path: "state",
          name: "Ish tarzi",
          component: () => import("../views/IshTarzi/Index.vue"),
        },
        {
          path: "state/create",
          name: "Ish tarzi qo'shish",
          component: () => import("../views/IshTarzi/Create.vue"),
        },
        {
          path: "state/update/:id",
          name: "Ish tarzi qayta nomlash",
          component: () => import("../views/IshTarzi/Update.vue"),
        },
        {
          path: "direction",
          name: "Yo'nalish",
          component: () => import("../views/Yonalish/Index.vue"),
        },
        {
          path: "direction/create",
          name: "Yo'nalish qo'shish",
          component: () => import("../views/Yonalish/Create.vue"),
        },
        {
          path: "direction/update/:id",
          name: "Yo'nalish qayta nomlash",
          component: () => import("../views/Yonalish/Update.vue"),
        },
        {
          path: "group/leader",
          name: "Guruh rahbari",
          component: () => import("../views/GuruhRahbari/Index.vue"),
        },
        {
          path: "group/leader/create",
          name: "Guruh rahbari qo'shish",
          component: () => import("../views/GuruhRahbari/Create.vue"),
        },
        {
          path: "group/leader/update/:id",
          name: "Guruh rahbari qayta nomlash",
          component: () => import("../views/GuruhRahbari/Update.vue"),
        },
        {
          path: "information",
          name: "Ma'lumot",
          component: () => import("../views/Malumot/Index.vue"),
        },
        {
          path: "information/create",
          name: "Ma'lumot qo'shish",
          component: () => import("../views/Malumot/Create.vue"),
        },
        {
          path: "information/update/:id",
          name: "Ma'lumot qayta nomlash",
          component: () => import("../views/Malumot/Update.vue"),
        },
        {
          path: "bonus/student",
          name: "Talaba bonus",
          component: () => import("../views/BonusStudent/Index.vue"),
        },
        {
          path: "bonus/student/create",
          name: "Talaba bonus qo'shish",
          component: () => import("../views/BonusStudent/Create.vue"),
        },
        {
          path: "bonus/student/update/:id",
          name: "Talaba bonus qayta nomlash",
          component: () => import("../views/BonusStudent/Update.vue"),
        },
        {
          path: "national",
          name: "Millati",
          component: () => import("../views/Millati/Index.vue"),
        },
        {
          path: "national/create",
          name: "Millat qo'shish",
          component: () => import("../views/Millati/Create.vue"),
        },
        {
          path: "national/update/:id",
          name: "Millatni qayta nomlash",
          component: () => import("../views/Millati/Update.vue"),
        },
        {
          path: "punishments",
          name: "Jarima",
          component: () => import("../views/Jarimalar/Index.vue"),
        },
        {
          path: "punishments/create",
          name: "Jarima qo'shish",
          component: () => import("../views/Jarimalar/Create.vue"),
        },
        {
          path: "punishments/update/:id",
          name: "Jarimani qayta nomlash",
          component: () => import("../views/Jarimalar/Update.vue"),
        },
        // {
        //   path: "scientific/leadership",
        //   name: "Ilmiy rahbarligi",
        //   component: () => import("../views/IlmiyRahbarligi/Index.vue")
        // },
        // {
        //   path: "scientific/leadership/create",
        //   name: "Ilmiy rahbarligi qo'shish",
        //   component: () => import("../views/IlmiyRahbarligi/Create.vue")
        // },
        // {
        //   path: "scientific/leadership/update/:id",
        //   name: "Ilmiy rahbarligi qayta nomlash",
        //   component: () => import("../views/IlmiyRahbarligi/Update.vue")
        // },
        {
          path: "academic/degree",
          name: "Ilmiy daraja",
          component: () => import("../views/IlmiyDaraja/Index.vue"),
        },
        {
          path: "academic/degree/create",
          name: "Ilmiy daraja qo'shish",
          component: () => import("../views/IlmiyDaraja/Create.vue"),
        },
        {
          path: "academic/degree/update/:id",
          name: "Ilmiy darajani qayta nomlash",
          component: () => import("../views/IlmiyDaraja/Update.vue"),
        },
        {
          path: "academic/title",
          name: "Ilmiy unvon",
          component: () => import("../views/IlmiyUnvon/Index.vue"),
        },
        {
          path: "academic/title/create",
          name: "Ilmiy unvon qo'shish",
          component: () => import("../views/IlmiyUnvon/Create.vue"),
        },
        {
          path: "academic/title/update/:id",
          name: "Ilmiy unvonni qayta nomlash",
          component: () => import("../views/IlmiyUnvon/Update.vue"),
        },
        {
          path: "institution",
          name: "Muassasa",
          component: () => import("../views/Muassasa/Index.vue"),
        },
        {
          path: "institution/create",
          name: "Muassasa qo'shish",
          component: () => import("../views/Muassasa/Create.vue"),
        },
        {
          path: "institution/update/:id",
          name: "Muassasa qayta nomlash",
          component: () => import("../views/Muassasa/Update.vue"),
        },
        {
          path: "family/status",
          name: "Oilaviy ahvoli",
          component: () => import("../views/OilaviyAhvoli/Index.vue"),
        },
        {
          path: "family/status/create",
          name: "Oilaviy ahvoli qo'shish",
          component: () => import("../views/OilaviyAhvoli/Create.vue"),
        },
        {
          path: "family/status/update/:id",
          name: "Oilaviy ahvoli qayta nomlash",
          component: () => import("../views/OilaviyAhvoli/Update.vue"),
        },
      ],
    },
    {
      path: "/layout/test",
      name: "layout test",
      component: () => import("../views/Layout/LayoutTest.vue")
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/Login.vue"),
    },
  ],
});

export default router;
