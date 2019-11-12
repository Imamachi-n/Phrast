<template>
  <div class="config">
    <h1 class="mt-5">
      <v-icon color="black" class="mr-2 mb-1">fas fa-cog</v-icon>Config
    </h1>

    <v-container>
      <v-row>
        <v-col class="text-center">
          <v-select
            v-model="selectedTime"
            :items="timeLimits"
            label="Time Limit (second)"
            outlined
            @change="changeTimeLimit"
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="text-center">
          <v-select
            v-model="selectedGameNum"
            :items="gameNumbers"
            label="Game Number (times)"
            outlined
            @change="changeGameNumber"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ConfigPage",
  data: () => ({
    selectedTime: 10,
    timeLimits: [5, 10, 20, 30, 40, 50, 60, 120],
    selectedGameNum: 3,
    gameNumbers: [1, 2, 3, 4, 5, 10],
  }),
  created() {
    this.selectedTime = this.$store.getters["getTimeOver"];
    this.selectedGameNum = this.$store.getters["getGameOver"];
  },
  methods: {
    changeTimeLimit() {
      this.$store.dispatch("setTimeOverAction", this.selectedTime);
      this.$store.dispatch("initializeTimeCountAction", this.selectedTime);
    },
    changeGameNumber() {
      this.$store.dispatch("setGameOverAction", this.selectedGameNum);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
