<template>
  <ion-page>
    <ion-content>
      <ion-icon :ios="logoApple" :md="logoAndroid"></ion-icon>
    </ion-content>
  </ion-page>
</template>

<script>
import { logoAndroid, logoApple } from "ionicons/icons";
import { IonContent, IonPage, IonIcon } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Icon",
  components: {
    IonContent,
    IonPage,
    IonIcon,
  },

  ionViewDidEnter() {
    console.log("Home page did enter");
  },
  ionViewDidLeave() {
    console.log("Home page did leave");
  },
  ionViewWillEnter() {
    console.log("Home page will enter");
  },
  ionViewWillLeave() {
    console.log("Home page will leave");
  },

  setup() {
    return { logoAndroid, logoApple };
  },
});
</script>
