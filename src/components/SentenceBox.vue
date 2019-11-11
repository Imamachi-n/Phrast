<template>
  <div class="sentenceBox">
    <input type="text" placeholder="Write your sentences" v-model="sentences" @change="test" />
    <button @click="postSentences">Submit your sentences</button>
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
    test() {
      // FIXME: Just for test
      console.log(this.$data.sentences);
    },
    postSentences() {
      this.$store.dispatch("saveSentences", this.$data.sentences);
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
