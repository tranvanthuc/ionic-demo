<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Edit todo</ion-title>
      <ion-button fill="clear" slot="end" @click="closeModal">
        <ion-icon :icon="close" slot="icon-only"></ion-icon>
      </ion-button>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-item>
      <ion-label position="stacked" color="primary">Content</ion-label>
      <ion-input
        v-model.trim="content"
        :value="todo.content"
        name="content"
        type="text"
      ></ion-input>
    </ion-item>
    <ion-text color="danger">
      <p v-show="contentError" class="ion-margin-start">{{ contentError }}</p>
    </ion-text>
    <ion-item>
      <ion-label>Complete</ion-label>
      <ion-toggle v-model="todoData.isDone"> </ion-toggle>
    </ion-item>

    <ion-button class="ion-margin-top" expand="full" @click="updateTodo">
      Update</ion-button
    >
  </ion-content>
</template>

<script>
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
  IonContent,
  IonItem,
  IonInput,
  IonLabel,
  IonToggle,
  IonText,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { close } from "ionicons/icons";
import { Todo } from "@/store/todos/index";
import { createNamespacedHelpers } from "vuex";
import { ACTIONS } from "@/store/todos/actions";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";

const { mapActions } = createNamespacedHelpers("todos");

export default defineComponent({
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon,
    IonContent,
    IonItem,
    IonInput,
    IonLabel,
    IonToggle,
    IonText,
  },

  setup() {
    // Define a validation schema
    const schema = yup.object({
      content: yup.string().required(),
    });

    // Create a form context with the validation schema
    const { validate: formValidate } = useForm({
      validationSchema: schema,
    });

    // No need to define rules for fields
    const { value: content, errorMessage: contentError } = useField("content");
    return {
      content,
      contentError,
      formValidate,
      close,
    };
  },
  emits: ["close-modal"],

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

  watch: {
    content(val) {
      this.todoData.content = val;
    },
  },

  computed: {
    todoData() {
      return { ...this.todo };
    },
  },

  methods: {
    ...mapActions([ACTIONS.EDIT_TODO]),
    closeModal() {
      this.$emit("close-modal");
    },
    updateTodo() {
      this.EDIT_TODO({
        todo: this.todoData,
        index: this.index,
      });
      this.closeModal();
    },
  },
});
</script>
