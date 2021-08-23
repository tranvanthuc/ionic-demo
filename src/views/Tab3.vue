<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 3</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <input
        ref="input"
        type="file"
        name="image"
        accept="image/*"
        @change="setImage"
      />

      <vue-cropper
        ref="cropper"
        :aspect-ratio="16 / 9"
        :src="imgSrc"
        preview=".preview"
      />

      <ion-button @click="zoom(0.2)">Zoom +</ion-button>
      <ion-button @click="zoom(-0.2)">Zoom -</ion-button>
      <ion-button @click="cropImage">Crop Image</ion-button>

      <section class="preview-area">
        <p>Preview</p>
        <div class="preview" />
        <p>Cropped Image</p>
        <div class="cropped-image">
          <ion-img v-if="cropImg" :src="cropImg" alt="Cropped Image" />
          <div v-else class="crop-placeholder" />
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="js">
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
import { ref, defineComponent} from 'vue';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonImg,
} from "@ionic/vue";

export default defineComponent({
  name: "Tab3",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
    IonImg,

    VueCropper
  },

  setup() {
    const cropImg = ref(null);
    const imgSrc = ref(null);

    return {
      cropImg,
      imgSrc
    }
  },

  methods: {
    setImage(e) {
      const file = e.target.files[0];
      if (file.type.indexOf('image/') === -1) {
        alert('Please select an image file');
        return;
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.imgSrc = event.target.result;
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert('Sorry, FileReader API not supported');
      }
    },
    zoom(percent) {
      this.$refs.cropper.relativeZoom(percent);
    },
    cropImage() {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
      console.log('this.cropImg', this.cropImg );
    },
  },
});
</script>
<style lang="scss">
.preview-area {
  width: 307px;
}
.preview-area p {
  font-size: 1.25rem;
  margin: 0;
  margin-bottom: 1rem;
}
.preview-area p:last-of-type {
  margin-top: 1rem;
}
.preview {
  width: 100%;
  height: calc(372px * (9 / 16));
  overflow: hidden;
}

.crop-placeholder {
  width: 100%;
  height: 200px;
  background: #ccc;
}
.cropped-image img {
  max-width: 100%;
}
</style>
