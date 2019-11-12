<template>
  <div class="sentenceBox">
    <v-container>
      <v-row>
        <v-col>
          <v-textarea
            outlined
            name="sentences"
            label="Your Sentences"
            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
            v-model="sentences"
            required
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col class="text-center">
          <v-btn x-large color="primary" @click="postSentences">Submit your sentences</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SentenceBox",
  props: {
    msg: String,
  },
  data: () => ({
    sentences: "TEST",
  }),
  methods: {
    postSentences() {
      this.$store.dispatch("saveSentences", this.$data.sentences);
      // FIXME: Just for test
      const test = true;
      if (test) {
        this.$store.dispatch("getRandomEnglishWord");
        console.log("JUST TEST!!");
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
