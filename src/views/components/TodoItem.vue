<template>
  <ion-item>
    <ion-label :class="{ isDone: todo.isDone }" @click="setOpen(true)">{{
      todo.content
    }}</ion-label>
    <ion-button
      fill="outline"
      shape="round"
      slot="end"
      @click="presentAlertConfirm(index)"
    >
      <ion-icon slot="icon-only" :icon="close"></ion-icon>
    </ion-button>
  </ion-item>

  <ion-modal
    :is-open="isOpenRef"
    css-class="my-custom-class"
    @didDismiss="setOpen(false)"
  >
    <modal :todo="todo" :index="index" @close-modal="setOpen(false)"></modal>
  </ion-modal>
</template>

<script>
import { defineComponent, ref } from "vue";
import { close } from "ionicons/icons";
import Modal from "./Modal.vue";
import {
  IonModal,
  IonLabel,
  IonItem,
  IonIcon,
  IonButton,
  alertController,
} from "@ionic/vue";
import { createNamespacedHelpers } from "vuex";
import { ACTIONS } from "@/store/todos/actions";
import { Todo } from "@/store/todos/index";
import toast from "@/mixins/toast";

const { mapActions } = createNamespacedHelpers("todos");

export default defineComponent({
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state) => (isOpenRef.value = state);
    return {
      isOpenRef,
      setOpen,
      close,
    };
  },
  props: {
    todo: {
      type: Todo,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  mixins: [toast],

  components: {
    IonLabel,
    IonItem,
    IonIcon,
    IonButton,
    IonModal,

    // components
    Modal,
  },

  methods: {
    ...mapActions([ACTIONS.DELETE_TODO]),

    onDeleteTodo(index) {
      this.DELETE_TODO(index);
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
