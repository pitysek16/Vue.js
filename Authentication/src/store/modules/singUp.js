import mutations from "@/store/mutations";

import { firebaseSingUp } from "@/services/firebase/singUp.service";

const { IS_SING_UP, LOGIN_LOADER } = mutations;
const singUpStore = {
  namespaced: true,
  state: {
    isSingedUpIn: false,
    loginInProgress: false,
  },
  getters: {
    isSingedUpIn: ({ isSingedUpIn }) => isSingedUpIn,
    loginInProgress: ({ loginInProgress }) => loginInProgress,
  },
  mutations: {
    [IS_SING_UP](state, bool) {
      state.isSingedUpIn = bool;
    },
    [LOGIN_LOADER](state, bool) {
      state.loginInProgress = bool;
    },
  },
  actions: {
    async singUp({ commit, dispatch }, { email, password }) {
      try {
        commit("LOGIN_LOADER", true);
        await firebaseSingUp(email, password);
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

export default singUpStore;
