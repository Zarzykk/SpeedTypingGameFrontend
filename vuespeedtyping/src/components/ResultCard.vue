<template>
  <v-container>
    <v-card color="grey darken-3" style="min-height: 220px;min-width: 250px" class="fadeIn">
      <v-card-text class="white--text fadeIn">Text: {{ result.description }}</v-card-text>
      <v-card-text class="white--text fadeIn second">Accuracy: {{ result.accuracy }}</v-card-text>
      <v-card-text class="white--text fadeIn third">Time: {{ result.time }}</v-card-text>
      <v-card-text class="white--text fadeIn fourth">WPM:{{ result.wpm}}</v-card-text>
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