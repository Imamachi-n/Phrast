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
    grammerChecks: [],
    gameCount: 0,
    gameOver: 3,
    gameLevel: 1,
    isFinishedGame: false,
    timeCountIntervalId: undefined,
    timeCount: 10,
    timeOver: 10,
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
    setGrammerChecks(state, grammerChecks) {
      state.grammerChecks = grammerChecks;
    },
    setGameCount(state, gameCount) {
      state.gameCount = gameCount;
    },
    setGameOver(state, gameOver) {
      state.gameOver = gameOver;
    },
    setGameLevel(state, gameLevel) {
      state.gameLevel = gameLevel;
    },
    setIsFinishedGame(state, isFinishedGame) {
      state.isFinishedGame = isFinishedGame;
    },
    setTimeCountIntervalId(state, timeCountIntervalId) {
      state.timeCountIntervalId = timeCountIntervalId;
    },
    setTimeCount(state, timeCount) {
      state.timeCount = timeCount;
    },
    setTimeOver(state, timeOver) {
      state.timeOver = timeOver;
    },
  },
  actions: {
    async getRandomEnglishWord({ commit }) {
      try {
        // const credential = JSON.parse(
        //   fs.readFileSync("../../config/wordAPI-credential.json")
        // );
        if (this.state.gameLevel === 1) {
          // Basic Mode
          const res = await axios.get("/api/words/1");
          const words = res.data.map((item) => item.word);
          commit("setWord", words[Math.floor(Math.random() * words.length)]);
        } else if (this.state.gameLevel === 2) {
          // Hell Mode
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
        }
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

    async getGrammerChecksFromDB({ commit }) {
      try {
        let { data: grammerChecks } = await axios.get("/api/grammer_check/all");
        commit("setGrammerChecks", grammerChecks);
      } catch (err) {
        console.error("ERROR: ", err);
      }
    },

    setWord({ commit }, word) {
      commit("setWord", word);
    },
    setGameCountAction({ commit }, gameCount) {
      commit("setGameCount", gameCount);
    },
    setGameOverAction({ commit }, gameOver) {
      commit("setGameOver", gameOver);
    },
    setGameLevelAction({ commit }, gameLevel) {
      commit("setGameLevel", gameLevel);
    },
    setIsFinishedGame({ commit }, isFinishedGame) {
      commit("setIsFinishedGame", isFinishedGame);
    },
    setTimeCountIntervalIdAction({ commit }, timeCountIntervalId) {
      commit("setTimeCountIntervalId", timeCountIntervalId);
    },
    clearTimeCountInternalIdAction() {
      clearInterval(this.state.timeCountIntervalId);
      this.dispatch("clearTimeCountAction");
      this.dispatch("setTimeCountIntervalIdAction", undefined);
    },
    setTimeCountAction({ commit }) {
      const timeCount = this.getters["getTimeCount"] - 1;
      commit("setTimeCount", timeCount);
    },
    clearTimeCountAction({ commit }) {
      commit("setTimeCount", this.state.timeOver);
    },
    setTimeOverAction({ commit }, timeOver) {
      commit("setTimeOver", timeOver);
    },
    initializeTimeCountAction({ commit }, timeCount) {
      commit("setTimeCount", timeCount);
    },
    async nextWord() {
      // Reset timeCount
      this.dispatch("clearTimeCountAction");

      // Store gameCount
      this.dispatch("setGameCountAction", this.getters["getGameCount"] + 1);

      // Check isFinish or not
      if (this.getters["getGameCount"] === this.getters["getGameOver"]) {
        // finished
        this.dispatch("setIsFinishedGame", true);
        this.dispatch("clearTimeCountInternalIdAction");
      } else {
        // not finished
        this.dispatch("getRandomEnglishWord");
      }
    },
  },
  getters: {
    getWord(state) {
      return state.word;
    },
    getReviewSentences(state) {
      return state.reviewSentences;
    },
    getGrammerChecks(state) {
      return state.grammerChecks;
    },
    getGameCount(state) {
      return state.gameCount;
    },
    getGameOver(state) {
      return state.gameOver;
    },
    getGameLevel(state) {
      return state.gameLevel;
    },
    getIsFinishedGame(state) {
      return state.isFinishedGame;
    },
    getTimeCount(state) {
      return state.timeCount;
    },
    getTimeOver(state) {
      return state.timeOver;
    },
    getTimeCountIntervalId(state) {
      return state.timeCountIntervalId;
    },
  },
});
