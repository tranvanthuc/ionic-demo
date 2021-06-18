<template>
  <ion-list>
    <ion-item v-for="(todo, index) in list" :key="index">
      <ion-checkbox color="primary" v-model="todo.isDone"></ion-checkbox>
      <ion-label :class="{ isDone: todo.isDone }">{{ todo.content }}</ion-label>
      <ion-button
        fill="outline"
        shape="round"
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
    onDeleteTodo(index) {
      this.DELETE_TODO(index);
    },
    async presentAlertConfirm(index) {
      const alert = await alertController.create({
        cssClass: "my-custom-class",
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
            cssClass: "danger",
            handler: () => {
              this.onDeleteTodo(index);
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
