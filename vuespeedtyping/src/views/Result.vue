<template>
  <v-container id="container" class="d-flex align-items-stretch flex-wrap">
    <v-row>
      <v-col cols="4" v-for="result in results" :key="result.id">
       <ResultCard :result="result"></ResultCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ResultCard from "../components/ResultCard";


export default {
  name: "Result",
  components: {
    ResultCard
  },
  computed: {
    results() {
      return this.$store.getters.getResults;
    }
  }
}
</script>

<style scoped>
body {
  height: 100vh;
  background-color: black;
  font-style: italic;
}
#container{
  padding-top: 100px;
}
</style>