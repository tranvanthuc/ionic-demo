<template>
  <ion-slides pager="true" class="slides-image" :options="slideOpts">
    <ion-slide v-for="(item, index) in list" :key="index">
      <ion-img class="img-mf" :src="item"></ion-img>
    </ion-slide>
  </ion-slides>
</template>
<script>
import { defineComponent } from "vue";
import { IonSlide, IonImg, IonSlides } from "@ionic/vue";

export default defineComponent({
  components: {
    IonSlide,
    IonImg,
    IonSlides,
  },

  setup() {
    const slideOpts = {
      speed: 400,
      slidesPerView: 1,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    };
    return {
      slideOpts,
    };
  },

  data() {
    return {
      list: [
        "https://treedots-banners.s3-ap-southeast-1.amazonaws.com/Image+from+iOS+(1).jpg",
        "https://firebasestorage.googleapis.com/v0/b/fnbees-e7549.appspot.com/o/banner1.jpg?alt=media&token=6efc8590-c208-4014-9d4b-d4b7d3dccd0d",
        "https://firebasestorage.googleapis.com/v0/b/fnbees-e7549.appspot.com/o/banner3.jpg?alt=media&token=f55b8495-bc91-4b63-a504-f7c90d0e291b",
        "https://firebasestorage.googleapis.com/v0/b/fnbees-e7549.appspot.com/o/banner2.jpg?alt=media&token=7a7e239e-fc35-4d62-9b54-ae921b6da353",
        "https://firebasestorage.googleapis.com/v0/b/fnbees-e7549.appspot.com/o/banner5.jpg?alt=media&token=e2730c68-391d-4425-a67d-2a6eb1ff6169",
      ],
    };
  },
});
</script>
<style lang="scss" scoped>
.slides-image {
  margin-top: 1rem;
}

.slides-image {
  .img-mf {
    height: 200px;
    object-fit: fill;
    padding: 1rem;
  }
}
ion-img::part(image) {
  border-radius: 10px;
}
</style>
<style lang="scss">
.swiper-pagination {
  bottom: 0 !important;
}
</style>
