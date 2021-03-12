import mutations from "@/store/mutations";

import { firebaseResertPassword } from "@/services/firebase/singUp.service";

const { RESERT_PASSWORD, LOGIN_LOADER } = mutations;
const resertPasswordStore = {
  namespaced: true,
  state: {
    resertPassword: false,
    loginInProgress: false,
  },
  getters: {
    resertPassword: ({ resertPassword }) => resertPassword,
    loginInProgress: ({ loginInProgress }) => loginInProgress,
  },
  mutations: {
    [RESERT_PASSWORD](state, bool) {
      state.resertPassword = bool;
    },
    [LOGIN_LOADER](state, bool) {
      state.loginInProgress = bool;
    },
  },
  actions: {
    async resertPassword({ commit, dispatch }, { email }) {
      try {
        commit("LOGIN_LOADER", true);
        await firebaseResertPassword(email);
        dispatch(
          "loadMessage",
          {
            msg: {
              title: "Success",
              text:
                "We have sent an email. Now you will be redirected to the Login page",
              variant: "success",
            },
          },
          { root: true }
        );
      } catch (err) {
        console.log("err: ", err);
        dispatch(
          "loadMessage",
          { msg: { title: "Error", text: err.message, variant: "danger" } },
          { root: true }
        );
      } finally {
        commit("LOGIN_LOADER", false);
      }
    },
  },
};

export default resertPasswordStore;
