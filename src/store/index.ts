import { createStore } from "vuex";

export default createStore({
  state: {
    loading: false,
  },
  getters: {},
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    defineLoading(context, payload) {
      context.commit("SET_LOADING", payload);
    },
  },
});
