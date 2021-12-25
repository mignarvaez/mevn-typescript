//Aplicación principal de vue
import { createApp } from "vue";
import App from "./App.vue";

//Se importa el enrutador
import router from "./router/index";

//Se indica, antes del mount, que use el router
createApp(App).use(router).mount("#app");
