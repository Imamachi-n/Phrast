<template>
  <div id="top">
    <v-row>
      <v-col class="text-center">
        <h1 class="pb-10 pt-12">Welcome to English Training App</h1>
        <v-spacer></v-spacer>
        <v-btn x-large color="primary" v-if="!isStarted" @click="clickStart">Game Start!!</v-btn>
      </v-col>
    </v-row>

    <div v-if="isStarted">
      <Words msg="Welcome to English Training App" />
      <SentenceBox></SentenceBox>
    </div>

    <router-link to="/config">Go to home</router-link>
  </div>
</template>

<script>
import Words from "../components/Words.vue";
import SentenceBox from "../components/SentenceBox.vue";

export default {
  name: "topPage",
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
      // FIXME: gameLevel: 1
      this.$store.dispatch("startGame", 1);
    },
  },
};
</script>

<style scoped>
#top {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  font-size: 56px;
  color: white;
}
</style>