import firebase from 'firebase/app';

export default {
  actions: {
    async createPost({ dispatch, commit }, post) {
      try {
        const uid = await dispatch('getUid');
        return await firebase.database().ref(`users/${uid}/records`).push(post);
      } catch (error) {
        commit('setError', error);
        throw error;
      }
    },

    async fetchRecords({ dispatch, commit }) {
      try {
        const uid = await dispatch('getUid');
        const records = await firebase
          .database()
          .ref(`users/${uid}/records`)
          .once('value')
          .then((snapshot) => {
            return snapshot.val();
          });
        return Object.keys(records).map((key) => ({
          ...records[key],
          id: key,
        }));
      } catch (error) {
        commit('setError', error);
        throw error;
      }
    },

    async fetchRecordById({ dispatch, commit }, id) {
      try {
        const uid = await dispatch('getUid');
        const record = await firebase
          .database()
          .ref(`users/${uid}/records`)
          .child(id)
          .once('value')
          .then((snapshot) => {
            return snapshot.val();
          });
        return {
          ...record,
          id,
        };
      } catch (error) {
        commit('setError', error);
        throw error;
      }
    },
  },
};
