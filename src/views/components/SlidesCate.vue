<template>
  <ion-slides class="slides-cate" :options="slideOpts">
    <ion-slide
      v-for="(slide, index) in listCates"
      :key="index"
      @click="chooseCate(index)"
    >
      <div class="d-flex flex-column">
        <div :class="[isActive(index) && 'active', 'slide-item']">
          <ion-img
            v-if="!slide.useIcon"
            class="ion-img"
            :src="slide.src"
            :color="isActive(index) ? 'light' : 'grey'"
          ></ion-img>
          <ion-icon
            v-if="slide.useIcon && !slide.useSrc"
            :icon="slide.icon"
            :color="isActive(index) ? 'light' : 'grey'"
          ></ion-icon>
          <ion-icon
            v-if="slide.useIcon && slide.useSrc"
            :src="slide.src"
            :color="isActive(index) ? 'light' : 'grey'"
          ></ion-icon>
        </div>
        <ion-text
          class="mt-1 fw-normal"
          :color="isActive(index) ? 'primary' : 'grey'"
        >
          {{ slide.label }}
        </ion-text>
      </div>
    </ion-slide>
  </ion-slides>
</template>
<script>
import { defineComponent } from "vue";
import { IonSlide, IonImg, IonText, IonSlides } from "@ionic/vue";
import { listCates } from "@/constants";

export default defineComponent({
  components: {
    IonSlide,
    IonImg,
    IonText,
    IonSlides,
  },

  props: {
    cate: {
      type: Number,
      required: true,
    },
  },

  setup() {
    const slideOpts = {
      initialSlide: 0,
      speed: 400,
      slidesPerView: "auto",
    };
    return {
      slideOpts,
    };
  },

  data() {
    return {
      listCates,
    };
  },

  methods: {
    chooseCate(index) {
      this.$emit("choose-cate", index);
    },
    isActive(index) {
      return this.cate === index;
    },
  },
});
</script>
<style lang="scss" scoped>
.slide-item {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.active {
  background-color: var(--ion-color-primary);
}

.slides-cate {
  overflow: auto;
  margin: 0 1rem;
}

.slides-cate::-webkit-scrollbar {
  display: none;
}

ion-icon {
  font-size: 1.5rem;
}

ion-img::part(image) {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}

ion-text {
  font-size: 14px;
}
</style>
<style lang="scss">
.slides-cate {
  .swiper-slide {
    width: 70px;
    justify-content: flex-start;
  }
}
</style>
