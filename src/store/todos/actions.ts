import { ActionTree } from "vuex";
import { State } from "./index";
import { MUTATIONS } from "./mutations";

export const enum ACTIONS {
  GET_TODOS = "GET_TODOS",
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
}

const actions: ActionTree<State, any> = {
  [ACTIONS.ADD_TODO]({ commit }, todo) {
    commit(MUTATIONS.ADD_TODO, todo);
  },
  [ACTIONS.DELETE_TODO]({ commit }, index) {
    commit(MUTATIONS.DELETE_TODO, index);
  },
};

export default actions;
