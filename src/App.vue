<template>
  <div id="app">
    <v-app id="cover">
      <v-app-bar color="indigo darken-3" dark app>
        <v-btn icon to="/">
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-toolbar-title>
          <v-icon class="mb-1 mr-1">far fa-paper-plane</v-icon>
          <b>Phrast:</b>
          The training App for English Speaking
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon to="/grammer_check">
          <v-icon>fas fa-check</v-icon>
        </v-btn>

        <v-btn icon to="/review">
          <v-icon>fas fa-book</v-icon>
        </v-btn>

        <v-btn icon to="/config">
          <v-icon>fas fa-cog</v-icon>
        </v-btn>
      </v-app-bar>

      <v-content>
        <router-view />
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>

<style scoped>
h1 {
  font-size: 56px;
  color: white;
}
</style>