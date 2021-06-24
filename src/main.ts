import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { IonicVue } from "@ionic/vue";

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/utils.css";

import store from "./store";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { IonIcon } from "@ionic/vue";

import { apolloClient } from "./apollo";

const app = createApp(App)
  .provide(DefaultApolloClient, apolloClient)
  .use(store)
  .use(IonicVue)
  .use(router);

app.component("font-icon", FontAwesomeIcon);
app.component("ion-icon", IonIcon);

router.isReady().then(() => {
  app.mount("#app");
});
