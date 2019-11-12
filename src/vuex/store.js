import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// import fs from "fs";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    word: "",
    sentences: "",
    gameNo: "",
    reviewSentences: [],
    gameCount: 0,
    gameOver: 3,
    isFinishedGame: false,
  },
  mutations: {
    setWord(state, word) {
      state.word = word;
    },
    setSentences(state, sentences) {
      state.sentences = sentences;
    },
    setGame(state, gameNo) {
      state.gameNo = gameNo;
    },
    setReviewSentences(state, reviewSentences) {
      state.reviewSentences = reviewSentences;
    },
    setGameCount(state, gameCount) {
      state.gameCount = gameCount;
    },
    setGameOver(state, gameOver) {
      state.gameOver = gameOver;
    },
    setIsFinishedGame(state, isFinishedGame) {
      state.isFinishedGame = isFinishedGame;
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
        const res = await axios.post("/api/sentences", {
          gameNo: this.state.gameNo,
          word: this.state.word,
          sentences,
        });
        if (res.status === 200 && res.statusText === "OK") {
          commit("setSentences", sentences);
        } else {
          console.log("ERRORS: cannot save your sentences");
        }
      } catch (err) {
        console.error("Errors!", err);
      }
    },
    async startGame({ commit }, gameLevel) {
      try {
        const res = await axios.post("/api/reviews", {
          gameLevel,
        });
        commit("setGame", res.data.gameNo);
      } catch (err) {
        console.error("Errors!", err);
      }
    },
    async getReviewSentencesFromDB({ commit }) {
      try {
        let { data: reviewSentences } = await axios.get("/api/reviews/all");
        commit("setReviewSentences", reviewSentences);
      } catch (err) {
        console.error("ERROR: ", err);
      }
    },
    setGameCountAction({ commit }, gameCount) {
      commit("setGameCount", gameCount);
    },
    setGameOverAction({ commit }, gameOver) {
      commit("setGameOver", gameOver);
    },
    setIsFinishedGame({ commit }, isFinishedGame) {
      commit("setIsFinishedGame", isFinishedGame);
    },
  },
  getters: {
    getWord(state) {
      return state.word;
    },
    getReviewSentences(state) {
      return state.reviewSentences;
    },
    getGameCount(state) {
      return state.gameCount;
    },
    getGameOver(state) {
      return state.gameOver;
    },
    getIsFinishedGame(state) {
      return state.isFinishedGame;
    },
  },
});
