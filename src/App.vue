<template>
  <div id="app">
    <v-app id="cover">
      <v-app-bar color="indigo darken-3" dark app>
        <v-btn icon to="/">
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-toolbar-title>The training App for English Speaking</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
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
  background-image: url(./assets/background.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
#cover {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>

<style scoped>
h1 {
  font-size: 56px;
  color: white;
}
</style>