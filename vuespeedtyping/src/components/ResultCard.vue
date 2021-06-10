<template>
  <v-container>
    <v-card dark class="fadeIn">
      <v-card-subtitle class="subtitle fadeIn">Text:</v-card-subtitle>
      <v-card-text class="white--text results fadeIn">{{ result.description }}</v-card-text>
      <v-card-subtitle class="subtitle fadeIn second">WPM:</v-card-subtitle>
      <v-card-text class="white--text results fadeIn second">{{ result.wpm}}</v-card-text>
      <v-card-subtitle class="subtitle fadeIn third">Time:</v-card-subtitle>
      <v-card-text class="white--text results fadeIn third">{{ result.time }}</v-card-text>
      <v-card-subtitle class="subtitle fadeIn fourth">Accuracy:</v-card-subtitle>
      <v-card-text class="white--text results fadeIn fourth">{{ result.accuracy }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: "ResultCard",
  props: ["result"],
}
</script>

<style scoped>
.subtitle{
  font-size: 1rem;
}
.results{
  font-size:0.9rem;
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
.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}
.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}
</style>