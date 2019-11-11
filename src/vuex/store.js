import Vue from "vue";
import Vuex from "vuex";
// import axiosBase from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    word: "",
  },
  mutations: {
    setWord(state, word) {
      state.word = word;
    },
  },
  actions: {
    async getRandomEnglishWord({ commit }) {
      try {
        const words = "TEST!!";
        commit("setWord", words);
      } catch (err) {
        console.error(err);
      }
    },
  },
  getters: {
    getWord(state) {
      return state.word;
    },
  },
});