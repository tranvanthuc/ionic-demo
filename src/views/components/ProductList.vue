<template>
  <ion-list>
    <ion-item v-for="(item, index) in list" :key="index">
      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <ion-label class="fw-normal">{{ item.title }}</ion-label>
          </ion-col>
          <ion-col size="12">
            <ion-text class="">{{ item.company }}</ion-text>
          </ion-col>
        </ion-row>
        <ion-row class="ion-align-items-center">
          <ion-col size="3">
            <ion-img :src="item.image"></ion-img>
          </ion-col>
          <ion-col>
            <ion-text class="">{{ item.kg }}</ion-text>
          </ion-col>
          <ion-col size="1">
            <ion-img :src="halal"></ion-img>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-item>
  </ion-list>

  <ion-infinite-scroll
    @ionInfinite="loadData"
    threshold="100px"
    id="infinite-scroll"
  >
    <ion-infinite-scroll-content
      loading-spinner="bubbles"
      loading-text="Loading more data..."
    >
    </ion-infinite-scroll-content>
  </ion-infinite-scroll>
</template>
<script>
import { defineComponent } from "vue";
import {
  IonList,
  IonItem,
  IonText,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonImg,
} from "@ionic/vue";
import product1 from "@/assets/home/product1.png";
import product2 from "@/assets/home/product2.png";
import product3 from "@/assets/home/product3.png";
import product4 from "@/assets/home/product4.png";
import halal from "@/assets/home/halal.svg";
export default defineComponent({
  components: {
    IonList,
    IonItem,
    IonText,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonImg,
  },

  data() {
    return {
      halal,
      list: [
        {
          title: "Arrowtooth Flounder Fillet 箭牙比目鱼片",
          company: "Treedots",
          image: product1,
          kg: "1 - 3 KG",
        },
        {
          title: "Arrowtooth Flounder Fillet 箭牙比目鱼片",
          company: "Treedots",
          image: product2,
          kg: "1 - 3 KG",
        },
        {
          title: "Arrowtooth Flounder Fillet 箭牙比目鱼片",
          company: "Treedots",
          image: product3,
          kg: "1 - 3 KG",
        },
        {
          title: "Arrowtooth Flounder Fillet 箭牙比目鱼片",
          company: "Treedots",
          image: product4,
          kg: "1 - 3 KG",
        },
      ],
    };
  },

  methods: {
    loadData(e) {
      this.list = [...this.list.concat(this.list)];
      e.target.complete();
      if (this.list.length > 12) {
        e.target.disabled = true;
      }
    },
  },
});
</script>
