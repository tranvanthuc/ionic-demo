import { DEFAULT_STATE, DefaultState } from "@/constants";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  gender: string;
  token: string;
}

export interface State extends DefaultState {
  user: User | null;
}

const state: State = {
  ...DEFAULT_STATE,
  user: null,
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
