<template>
  <div class="config">
    <h1 class="mt-5">
      <v-icon color="black" class="mr-2 mb-1">fas fa-book</v-icon>Review
    </h1>
    <v-container>
      <v-card>
        <v-card-title>
          <v-text-field v-model="search" label="Search" single-line hide-details />
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="$store.getters['getReviewSentences']"
          :search="search"
        ></v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "reviewPage",
  data() {
    return {
      search: "",
      headers: [
        { text: "ID", value: "id" },
        { text: "Word", value: "word" },
        { text: "Sentence", value: "sentence" },
      ],
    };
  },
  methods: {},
  async created() {
    this.$store.dispatch("getReviewSentencesFromDB");
    console.log(this.$store.getters["getReviewSentences"][0]);
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
