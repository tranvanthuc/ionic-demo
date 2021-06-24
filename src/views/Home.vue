<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <!-- header -->
      <ion-toolbar>
        <ion-grid>
          <ion-row class="ion-align-items-center">
            <ion-col size="7" class="pl-1">
              <ion-input
                class="input-search px-3"
                clear-input
                placeholder="Find products"
              >
              </ion-input>
            </ion-col>
            <ion-col size="5" class="header-right pr-1">
              <font-icon class="mx-2" icon="filter"/>
              <font-icon class="mx-2" icon="building"/>
              <font-icon class="mx-2" icon="store"/>
              <font-icon class="ml-2" icon="bell"
            /></ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>

      <!-- slides cate -->
      <slides-cate :cate="cate" @choose-cate="chooseCate" />

      <!-- slides images -->
      <slides-image></slides-image>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { ellipse, square, triangle, logOut, close } from "ionicons/icons";
import history from "@/assets/home/history.svg";
import all from "@/assets/home/all.svg";
import newest from "@/assets/home/newest.svg";
import quoted from "@/assets/home/quoted.svg";
import noImage from "@/assets/no_image.png";
import {
  IonPage,
  IonToolbar,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
} from "@ionic/vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFilter,
  faBuilding,
  faStore,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import SlidesCate from "./components/SlidesCate.vue";
import SlidesImage from "./components/SlidesImage.vue";

library.add(faFilter, faBuilding, faStore, faBell);

export default defineComponent({
  name: "Tab3",
  components: {
    IonToolbar,
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonInput,

    // components
    SlidesCate,
    SlidesImage,
  },

  data() {
    return {
      cate: 0,
    };
  },

  methods: {
    chooseCate(cate) {
      this.cate = cate;
    },
  },

  setup() {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.

    return {
      // images
      history,
      newest,
      quoted,
      all,
      noImage,

      close,
      ellipse,
      square,
      triangle,
      logOut,
    };
  },
});
</script>
<style lang="scss" scope>
.header-right {
  text-align: end;
}

.header-right * {
  color: var(--ion-color-primary);
}

.input-search {
  background-color: #f5f5f5;
  border-radius: 5px;
}
</style>
