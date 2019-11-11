<template>
  <div id="app">
    <h1>Welcome to English Training App</h1>
    <button v-if="!isStarted" @click="isStarted = !isStarted">Start!!</button>

    <div v-if="isStarted">
      <Words msg="Welcome to English Training App" />
      <SentenceBox></SentenceBox>
    </div>
  </div>
</template>

<script>
import Words from "./components/Words.vue";
import SentenceBox from "./components/SentenceBox.vue";

export default {
  name: "app",
  components: {
    Words,
    SentenceBox,
  },
  data: () => ({
    isStarted: false,
  }),
  methods: {
    clickStart() {
      this.$data.isStarted = !this.$data.isStarted;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
