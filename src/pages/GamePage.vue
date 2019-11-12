<template>
  <div class="config">
    <v-row v-if="!$store.getters['getIsFinishedGame']">
      <v-col class="text-center">
        <Words msg="Welcome to English Training App" />
        <SentenceBox></SentenceBox>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="text-center">
        <h1>{{$store.getters['timeCount']}}</h1>
      </v-col>
    </v-row>

    <v-row v-if="$store.getters['getIsFinishedGame']">
      <v-col class="text-center">
        <h1>Finished!!</h1>
        <SpeechBubble :size="220" mood="happy" color="#83D1FB" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Words from "../components/Words.vue";
import SentenceBox from "../components/SentenceBox.vue";
import { SpeechBubble } from "vue-kawaii";

export default {
  name: "gamePage",
  components: {
    Words,
    SentenceBox,
    SpeechBubble,
  },
  created() {
    // Start timer
    this.timer();
  },
  methods: {
    timer() {
      // clearInterval if there is previous timer
      if (this.$store.getters["getTimeCountIntervalId"] !== undefined) {
        this.$store.dispatch("clearTimeCountInternalIdAction");
        console.log("Clear!!");
      }

      // save IntervalId and timeCounter
      const test = setInterval(this.timeCount, 1000);
      this.$store.dispatch("setTimeCountIntervalIdAction", test);
    },
    timeCount() {
      // set timeCount to store
      console.log(this.$store.getters["getTimeCount"]);
      this.$store.dispatch("setTimeCountAction");

      // if timeover, execute nextWord() and reset timeCount
      if (this.$store.getters["getTimeCount"] <= 0) {
        // Post sentences
        this.$store.dispatch("saveSentences", "FAILED...");
        this.$store.dispatch("nextWord");
        console.log("Next");
      }
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
