<template>
  <div class="gameSelect">
    <h2>GameSelect</h2>
    <v-btn x-large color="primary" @click.native="basicMode" to="/game">Basic Mode</v-btn>
    <v-btn x-large color="accent" @click.native="hellMode" to="/game">Hell Mode...</v-btn>
  </div>
</template>

<script>
export default {
  name: "GameSelectPage",
  methods: {
    basicMode() {
      console.log("Basic Mode Start!!");
      this.$store.dispatch("startGame", 1);
      this.$store.dispatch("setGameLevelAction", 1);
      this.clickStart();
    },
    hellMode() {
      console.log("Game Start!!");
      this.$store.dispatch("startGame", 2);
      this.$store.dispatch("setGameLevelAction", 2);
      this.clickStart();
    },
    clickStart() {
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
