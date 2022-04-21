import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      count: 0,
      userName: localStorage.getItem("userName"),
    };
  },
  getters: {},
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {},
  modules: {},
});
