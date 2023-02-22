<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { useLoadingBar, useNotification } from "naive-ui";
import { ref, onMounted, watch } from "vue";
import { useErrorStore } from "./stores/Error";
import Socket from './sokcet/main'
// import HelloWorld from './components/HelloWorld.vue'
const loading = useLoadingBar();
const notification = useNotification();
const router = useRouter();
const error_store = useErrorStore();
router.beforeEach(() => {
  loading.start();
});
router.afterEach(() => {
  loading.finish();
});
router.onError(() => {
  loading.error();
});
onMounted(()=>{
  Socket.connect()
})

watch(
  () => error_store.error_text,
  (val) => {
    if (val) {
      notification.error({
        content: "Xatolik",
        meta: val,
        duration: 2500,
        keepAliveOnHover: true,
      });
    }
    setTimeout(() => {
      error_store.error_text = null;
    }, 2500);
  }
);
</script>

<template>
  <RouterView />
</template>

<style>
.ogoh{
        position: absolute;
        left: 250px;
        top: 100px;
        z-index: 100;
    }
/* header {
  line-height: 1.5;
  max-height: 100vh;
} */

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
} */

/* nav a.router-link-exact-active {
  color: var(--color-text);
} */

/* nav a.router-link-exact-active:hover {
  background-color: transparent;
} */

/* nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
} */

/* nav a:first-of-type {
  border: 0;
} */

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>
