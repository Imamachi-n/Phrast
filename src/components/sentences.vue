<template>
  <div class="sentences">
    <h1>sentences</h1>
    <button></button>
  </div>
</template>

<script>
export default {
  name: "Words",
  props: {
    msg: String,
  },
  methods: {},
  async created() {
    this.$store.dispatch("getRandomEnglishWord");
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
