import firebase from 'firebase/app';

export default {
  actions: {
    async login({ commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        commit('setError', error);
        throw error;
      }
    },
    async registration({ dispatch, commit }, { email, password, name }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch('getUid');
        await firebase.database().ref(`/users/${uid}/info`).set({
          bill: 1000,
          name,
        });
      } catch (error) {
        commit('setError', error);
        throw error;
      }
    },
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    async logout({ commit }) {
      await firebase.auth().signOut();
      commit('clearInfo');
    },
  },
};
