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
  [MUTATIONS.EDIT_TODO](state, { todo, index }) {
    state.list[index] = todo;
  },
};

export default mutations;
