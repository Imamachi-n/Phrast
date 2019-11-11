<template>
  <div id="app">
    <v-app id="cover">
      <v-app-bar color="indigo darken-3" dark app>
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-toolbar-title>The training App for English Speaking</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>fas fa-book</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>fas fa-cog</v-icon>
        </v-btn>
      </v-app-bar>

      <v-content>
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
      </v-content>
    </v-app>
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
      // FIXME: gameLevel: 1
      this.$store.dispatch("startGame", 1);
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
  background-image: url(./assets/background.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
#cover {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>

<style scoped>
h1 {
  font-size: 56px;
  color: white;
}
</style>