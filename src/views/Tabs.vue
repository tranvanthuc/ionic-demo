<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="triangle" />
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="ellipse" />
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="square" />
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="logout" @click="logout">
          <ion-icon :icon="logOut" />
          <ion-label>Logout</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { ellipse, square, triangle, logOut } from "ionicons/icons";
import { useRouter } from "vue-router";
import storage from "@/libs/storage";

export default defineComponent({
  name: "Tabs",
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
  },
  setup() {
    const router = useRouter();

    return {
      ellipse,
      square,
      triangle,
      logOut,
      router,
    };
  },

  methods: {
    logout() {
      storage.removeItem("token");
      this.router.push("/login");
    },
  },
});
</script>
