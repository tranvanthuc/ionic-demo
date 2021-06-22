import { ActionTree } from "vuex";
import { State } from "./index";
import { MUTATIONS } from "./mutations";
import { apolloClient } from "@/apollo";
import { loginDashboard } from "@/apollo/graphql";
import router from "@/router";

export const enum ACTIONS {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

const actions: ActionTree<State, any> = {
  async [ACTIONS.LOGIN]({ commit }, params) {
    commit(MUTATIONS.LOGIN_REQUEST, params);
    try {
      const { data } = await apolloClient.mutate({
        mutation: loginDashboard,
        variables: params,
      });
      commit(MUTATIONS.LOGIN_SUCCESS, data.signIn);
    } catch (error) {
      console.log(error);
      commit(MUTATIONS.LOGIN_FAILURE, error);
    }
  },
  [ACTIONS.LOGOUT]({ commit }) {
    commit(MUTATIONS.LOGOUT);
  },

  [ACTIONS.LOGOUT]({ commit }) {
    commit(MUTATIONS.LOGOUT);
    router.push({ name: "login" });
  },
};

export default actions;
