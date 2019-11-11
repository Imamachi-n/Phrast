<template>
  <div id="top">
    <v-row>
      <v-col class="text-center">
        <h1 class="pb-10 pt-12">Welcome to English Training App</h1>
        <v-spacer></v-spacer>
        <v-btn x-large color="primary" @click.native="clickStart" to="/game">Game Start!!</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "topPage",
  methods: {
    clickStart() {
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