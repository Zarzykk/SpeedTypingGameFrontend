<template>
  <v-app>
    <div>
    <v-app-bar app dark color="dark">
      <v-spacer/>
      <v-toolbar-title>Test your typing speed</v-toolbar-title>
      <v-spacer/>
    </v-app-bar>
    <router-view></router-view>
    </div>
  </v-app>
</template>

<style>
  #app {
    background-image: url("./assets/background.jpg");
  }


</style>

<script>
export default {
  name: 'App',
  data: () => ({
  })
};
</script>