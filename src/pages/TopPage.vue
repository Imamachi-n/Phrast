<template>
  <div id="top">
    <div id="cover">
      <v-row>
        <v-col class="text-center">
          <h1 class="pb-10 pt-12">Welcome to English Training App</h1>
          <v-spacer></v-spacer>
          <v-btn x-large color="primary" @click.native="clickStart" to="/game">Game Start!!</v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "topPage",
  methods: {
    clickStart() {
      // FIXME: gameLevel: 1
      console.log("Game Start!!");
      this.$store.dispatch("startGame", 1);

      // Reset game status
      this.$store.dispatch("setIsFinishedGame", false);
      this.$store.dispatch("setGameCountAction", 0);

      // Reset timeCount
      this.$store.dispatch("setTimeCountAction", 0);
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
  background-image: url(../assets/background.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-size: cover;
  height: 100%;
}
#cover {
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
}
h1 {
  font-size: 56px;
  color: white;
}
</style>