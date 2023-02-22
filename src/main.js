import { createApp } from "vue";
import { createPinia } from "pinia";
import naive from "naive-ui";
import Provider from "./components/Provider.vue";
import router from "./router";
const app = createApp(Provider);
const pinia = createPinia();
app.use(pinia);
import { useErrorStore } from "./stores/Error";
import "./assets/main.css";
// import "./assets/main.scss";
import axios from "axios";

const error_store = useErrorStore();
const Bearer = "Bearer ";
let BASE_URL = "http://localhost:5001/api/v1/admin-app/";

// let BASE_URL = "http://194.113.153.92:63000/api/v1/admin-app/";

// let BASE_URL = "http://176.53.163.29:3025/api/v1/admin-app/";
axios.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = Bearer + localStorage.getItem("token");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    if(response.data.success === false) {
      if(response.data.error_code == 401) {
        router.push("/login");
      }
      error_store.error_text = response.data.message;
    }
    return response.data;
  },
  function (error) {
    // console.log(error);
    if (error.code === "ERR_NETWORK") {
      // return Promise.reject('Internetga ulanishda xatolik!');
      error_store.error_text = "Internetga ulanishda xatolik!";
    } else 
    if (error.response.data.error_code == 401) {
      error_store.error_text = error.response.data.message;
      router.push("/login");
    }
    return Promise.reject(error);
  }
);

axios.defaults.baseURL = BASE_URL;
app.use(router);
app.use(naive);
app.provide('BASE_URL', BASE_URL)
app.mount("#app");
