import { DEFAULT_STATE, DefaultState } from "@/constants";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export interface Todo {
  id: number;
  content: string;
  isDone: boolean;
}
export interface State extends DefaultState {
  list: Todo[];
}

const state: State = {
  ...DEFAULT_STATE,
  list: [
    { id: 1, content: "Do the laundry", isDone: false },
    { id: 2, content: "Buy Christmas gifts", isDone: true },
    { id: 3, content: "Spellcheck my draft", isDone: false },
  ],
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
