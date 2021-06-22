import { defineComponent } from "vue";
import { toastController } from "@ionic/vue";

export default defineComponent({
  methods: {
    async openToast(message: string) {
      const toast = await toastController.create({
        message,
        duration: 2000,
        position: "top",
      });
      return toast.present();
    },
  },
});
