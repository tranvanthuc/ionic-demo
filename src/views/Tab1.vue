<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <!-- list -->
      <todo-list :todos="todos" />
    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <ion-input
          placeholder="Enter todo"
          v-model.trim="content"
          @keyup.enter="addTodo"
        ></ion-input>
        <ion-button slot="end" @click="addTodo">Add</ion-button>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonFooter,
  IonToolbar,
  IonButton,
  IonInput,

  // controller,
  alertController,
} from "@ionic/vue";
import TodoList from "./components/TodosList.vue";
import { defineComponent } from "vue";
import { createNamespacedHelpers } from "vuex";
import { ACTIONS } from "@/store/todos/actions";

const { mapActions } = createNamespacedHelpers("todos");

export default defineComponent({
  name: "Tab1",
  components: {
    TodoList,
    IonHeader,
    IonTitle,
    IonContent,
    IonPage,
    IonFooter,
    IonToolbar,
    IonButton,
    IonInput,
  },

  data() {
    return {
      todos: [],
      content: "",
    };
  },

  methods: {
    ...mapActions([ACTIONS.ADD_TODO]),
    async alertValidate() {
      const alert = await alertController.create({
        header: "Alert!",
        message: "<strong>Please enter todo!</strong>",
        buttons: [
          {
            text: "Okay",
          },
        ],
      });
      return alert.present();
    },
    async addTodo() {
      if (this.content === "") {
        await this.alertValidate();
      } else {
        const todo = {
          id: this.todos.length,
          content: this.content,
        };

        this.ADD_TODO(todo);
        this.content = "";
      }
    },
  },
});
</script>
