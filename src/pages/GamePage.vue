<template>
  <div class="config">
    <v-row v-if="!$store.getters['getIsFinishedGame']">
      <v-col class="text-center">
        <Words msg="Welcome to English Training App" />
        <SentenceBox></SentenceBox>
      </v-col>
    </v-row>

    <v-row v-if="$store.getters['getIsFinishedGame']">
      <h1>Finished!!</h1>
    </v-row>
  </div>
</template>

<script>
import Words from "../components/Words.vue";
import SentenceBox from "../components/SentenceBox.vue";

export default {
  name: "gamePage",
  components: {
    Words,
    SentenceBox,
  },
  created() {
    this.$store.dispatch("setIsFinishedGame", false);
    this.$store.dispatch("setGameCountAction", 0);
  },
  methods: {},
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
