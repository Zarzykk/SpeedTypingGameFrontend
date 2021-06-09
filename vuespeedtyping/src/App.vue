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
  }),
  mounted() {
    this.$store.dispatch('fetchResults').catch(error=>alert(error.response.data))
    this.$store.dispatch('fetchText').catch(error=>alert(error.response.data))
    this.$store.commit('setToken', localStorage.getItem('auth-token'))
    this.$store.commit('setLoggedId',localStorage.getItem('id'))
  }
};
</script>