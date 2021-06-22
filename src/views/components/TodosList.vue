<template>
  <ion-list>
    <todo-item
      v-for="(todo, index) in list"
      :key="index"
      :index="index"
      :todo="todo"
    />
  </ion-list>
</template>

<script>
import { defineComponent } from "vue";
import { IonList } from "@ionic/vue";
import { createNamespacedHelpers } from "vuex";
import TodoItem from "./TodoItem.vue";

const { mapGetters } = createNamespacedHelpers("todos");

export default defineComponent({
  components: {
    IonList,
    TodoItem,
  },

  computed: {
    ...mapGetters(["list"]),
  },
});
</script>
