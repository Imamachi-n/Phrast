<template>
  <div class="grammerCheck">
    <h1 class="mt-5">
      <v-icon color="black" class="mr-2 mb-1">fas fa-check</v-icon>Grammer Check
    </h1>
    <v-container>
      <v-card>
        <v-card-title>
          <v-text-field v-model="search" label="Search" single-line hide-details />
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="$store.getters['getGrammerChecks']"
          :search="search"
        ></v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "grammerCheck",
  data() {
    return {
      search: "",
      headers: [
        { text: "ID", value: "id" },
        { text: "Word", value: "word" },
        { text: "Sentences", value: "sentence" },
        { text: "Message", value: "message" },
        { text: "Short", value: "short_message" },
        { text: "Target", value: "target" },
      ],
    };
  },
  methods: {},
  async created() {
    this.$store.dispatch("getGrammerChecksFromDB");
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
