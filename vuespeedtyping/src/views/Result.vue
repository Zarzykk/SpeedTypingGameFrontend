<template>
  <v-container id="container" class="d-flex align-items-stretch flex-wrap">
    <v-row>
      <v-col class="justify-lg-end fadeIn" >
      <v-btn rounded dark color="grey darken-2" to="/userpage">back</v-btn>
      </v-col>
    </v-row>
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

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fadeIn {
  opacity: 0;
  -webkit-animation: fadeIn ease-in 1;
  -moz-animation: fadeIn ease-in 1;
  animation: fadeIn ease-in 1;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
}
.fadeIn {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

</style>