<template>
  <ion-list>
    <ion-item v-for="(todo, index) in list" :key="index">
      <ion-checkbox
        color="primary"
        v-model="todo.isDone"
        @ionChange="onChangeStatus"
      ></ion-checkbox>
      <ion-label :class="{ isDone: todo.isDone }">{{ todo.content }}</ion-label>
      <ion-button
        fill="outline"
        shape="round"
        slot="end"
        @click="presentAlertConfirm(index)"
      >
        <ion-icon slot="icon-only" :icon="close"></ion-icon>
      </ion-button>
    </ion-item>
  </ion-list>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonList,
  IonLabel,
  IonItem,
  IonIcon,
  IonButton,
  alertController,
  toastController,
  IonCheckbox,
} from "@ionic/vue";
import { createNamespacedHelpers } from "vuex";
import { close } from "ionicons/icons";
import { ACTIONS } from "@/store/todos/actions";

const { mapGetters, mapActions } = createNamespacedHelpers("todos");

export default defineComponent({
  setup() {
    return {
      close,
    };
  },

  components: {
    IonList,
    IonLabel,
    IonItem,
    IonIcon,
    IonButton,
    IonCheckbox,
  },

  computed: {
    ...mapGetters(["list"]),
  },

  methods: {
    ...mapActions([ACTIONS.DELETE_TODO]),
    onChangeStatus(event) {
      const checked = event.detail.checked;
      if (checked) {
        this.openToast("This todo has done!");
      }
    },

    onDeleteTodo(index) {
      this.DELETE_TODO(index);
    },

    async openToast(message) {
      const toast = await toastController.create({
        message,
        duration: 2000,
        position: "top",
      });
      return toast.present();
    },

    async presentAlertConfirm(index) {
      const alert = await alertController.create({
        header: "Confirm!",
        message: "<strong>You want to delete?</strong>",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
          },
          {
            text: "Okay",
            handler: () => {
              this.onDeleteTodo(index);
              this.openToast("This todo had deleted!");
            },
          },
        ],
      });
      return alert.present();
    },
  },
});
</script>

<style lang="css" scoped>
.isDone {
  text-decoration: line-through;
  color: #ddd;
}
</style>
