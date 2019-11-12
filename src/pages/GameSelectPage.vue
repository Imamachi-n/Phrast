<template>
  <div class="gameSelect">
    <h2>GameSelect</h2>
    <v-btn x-large color="primary" @click.native="clickStart" to="/game">Hell Mode...</v-btn>
  </div>
</template>

<script>
export default {
  name: "GameSelectPage",
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
