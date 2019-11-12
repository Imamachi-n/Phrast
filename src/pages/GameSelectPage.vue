<template>
  <div class="gameSelect">
    <v-row>
      <v-col class="text-center">
        <h1 class="mt-5">
          <v-icon color="black" class="mr-2 mb-1">fas fa-gamepad</v-icon>GameSelect
        </h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="text-center">
        <v-btn x-large color="primary" @click.native="basicMode" to="/game">
          <v-icon class="mr-2">fas fa-egg</v-icon>Basic Mode
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="text-center">
        <v-btn x-large color="accent" @click.native="hellMode" to="/game">
          <v-icon class="mr-2">fas fa-haykal</v-icon>Hell Mode
        </v-btn>
      </v-col>
    </v-row>
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
