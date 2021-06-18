import { MutationTree } from "vuex";
import { State, Todo } from "./index";

export const enum MUTATIONS {
  GET_TODOS = "GET_TODOS",
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  EDIT_TODO = "EDIT_TODO",
}

const mutations: MutationTree<State> = {
  [MUTATIONS.ADD_TODO](state, newTodo: Todo) {
    state.list.push({ ...newTodo });
  },
  [MUTATIONS.DELETE_TODO](state, index: number) {
    state.list.splice(index, 1);
  },
  [MUTATIONS.EDIT_TODO](state, todo: Todo) {
    const ogIndex = state.list.findIndex((t) => t.id === todo.id);
    state.list[ogIndex] = todo;
  },
};

export default mutations;
