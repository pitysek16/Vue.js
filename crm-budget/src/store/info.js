import firebase from 'firebase/app';

export default {
  state: {
    info: {},
  },
  getters: {
    info: (s) => s.info,
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    clearInfo(state) {
      state.info = {};
    },
  },
  actions: {
    async fetchInfo({ dispatch, commit }) {
      try {
        const uid = await dispatch('getUid');

        await firebase
          .database()
          .ref(`users/${uid}/info`)
          .once('value')
          .then((snapshot) => {
            const info = snapshot.val();
            commit('setInfo', info);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
