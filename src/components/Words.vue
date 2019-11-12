<template>
  <div class="words">
    <h1>{{ $store.getters["getWord"] }}</h1>
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
h1 {
  font-size: 60px;
  margin: 50px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
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
