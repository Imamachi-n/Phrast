import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
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
    setSentences(state, sentences) {
      state.sentences = sentences;
    },
  },
  actions: {
    async getRandomEnglishWord({ commit }) {
      try {
        // const credential = JSON.parse(
        //   fs.readFileSync("../../config/wordAPI-credential.json")
        // );
        const axiosMod = axios.create({
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
        const res = await axiosMod.get("?random=true");
        commit("setWord", res.data.word);
      } catch (err) {
        console.error("Errors!", err);
      }
    },
    async saveSentences({ commit }, sentences) {
      try {
        const res = await axios.post("/api/reviews", {
          sentences,
        });
        console.log(res);
        console.log("Sent your sentences: ");
        console.log(sentences);
        commit("setSentences", sentences);
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
