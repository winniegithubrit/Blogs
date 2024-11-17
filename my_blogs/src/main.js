import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";


import DefaultPage from "./views/DefaultPage.vue";
import AboutPage from "./views/AboutPage.vue";


const routes = [
  { path: "/", component: DefaultPage },
  { path: "/about", component: AboutPage },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});


createApp(App)
  .use(router)  
  .mount("#app");
