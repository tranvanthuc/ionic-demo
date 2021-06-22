import { MutationTree } from "vuex";
import { State } from "./index";
import { REQUEST, SUCCESS, FAILURE } from "@/libs/state";

export const enum MUTATIONS {
  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILURE = "LOGIN_FAILURE",
  LOGOUT = "LOGOUT",
}

const mutations: MutationTree<State> = {
  [MUTATIONS.LOGIN_REQUEST](state) {
    REQUEST(state);
  },
  [MUTATIONS.LOGIN_SUCCESS](state, user) {
    SUCCESS(state);
    state.user = user;
  },
  [MUTATIONS.LOGIN_FAILURE](state, error) {
    FAILURE(state, error);
  },

  [MUTATIONS.LOGOUT](state) {
    state.user = null;
  },
};

export default mutations;
