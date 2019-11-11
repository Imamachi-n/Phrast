<template>
  <div id="app">
    <Words msg="Welcome to English Training App" />
    <SentenceBox></SentenceBox>
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
