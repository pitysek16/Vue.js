import mutations from "@/store/mutations";

const { SHOW_NOTIFY } = mutations;

const notifyStore = {
  state: {
    messagePoll: [],
  },
  getters: {
    lastMessage: ({ messagePoll }) => messagePoll[messagePoll.length - 1],
  },
  mutations: {
    [SHOW_NOTIFY](state, msg) {
      state.messagePoll.push(msg);
    },
  },
  actions: {
    loadMessage({ commit }, payload = {}) {
      commit(SHOW_NOTIFY, payload);
    },
  },
};

export default notifyStore;
