import Vue from "vue";
import Vuex from "vuex";
import firebase from "@/plugins/firebase";
import auth from "./modules/auth";
import singUp from "./modules/singUp";
import notify from "./modules/notification";
import resertPassword from "./modules/resertPassword";
import user from "./modules/user";
// import authGuard from "@/guards/auth.guard";
import router from "@/router";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    notify,
    user,
    singUp,
    resertPassword,
  },
});

firebase.auth().onAuthStateChanged((userData) => {
  store.dispatch("setIsLoggenInState", Boolean(userData));
  store.dispatch("setUserState", userData);

  if (userData) {
    console.log("logged in", userData);
    router.push({ name: "Home" });
  } else {
    console.log("not logged in");
  }
});

// authGuard(store);

export default store;
