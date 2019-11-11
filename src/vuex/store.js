import Vue from "vue";
import Vuex from "vuex";
import axiosBase from "axios";
// import fs from "fs";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    word: "",
    sentences: "",
  },
  mutations: {
    setWord(state, word) {
      state.word = word;
    },
  },
  actions: {
    async getRandomEnglishWord({ commit }) {
      try {
        // const credential = JSON.parse(
        //   fs.readFileSync("../../config/wordAPI-credential.json")
        // );
        const axios = axiosBase.create({
          baseURL: "https://wordsapiv1.p.rapidapi.com/words",
          headers: {
            "x-rapidapi-host":
              process.env.X_RAPIDAPI_HOST || "wordsapiv1.p.rapidapi.com",
            "x-rapidapi-key":
              process.env.X_RAPIDAPI_KEY ||
              "3e7c7ba41cmsh93925d89a2c673ep120a12jsnc003729faf62",
          },
          responseType: "json",
        });
        const res = await axios.get("?random=true");
        commit("setWord", res.data.word);
      } catch (err) {
        console.error("Errors!", err);
      }
    },
    async saveSentences() {
      try {
        // API
        console.log("Insert your sentences");
      } catch (err) {
        console.error("Errors!", err);
      }
    },
  },
  getters: {
    getWord(state) {
      return state.word;
    },
  },
});
