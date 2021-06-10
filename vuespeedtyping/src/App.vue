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
    background-repeat: no-repeat;
    background-attachment: fixed;
  }



</style>

<script>
export default {
  name: 'App',
  data: () => ({
  }),
  mounted() {
    this.$store.commit('setToken', localStorage.getItem('auth-token'))
    this.$store.commit('setLoggedId',localStorage.getItem('id'))
  }
};
</script>