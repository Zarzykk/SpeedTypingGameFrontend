<template>
  <v-container>
    <v-card color="grey darken-1" style="min-height: 300px">
      <v-card-text class="white--text">Text: {{ result.description }}</v-card-text>
      <v-card-text class="white--text">Accuracy: {{ result.accuracy }}</v-card-text>
      <v-card-text class="white--text">Time: {{ result.time }}</v-card-text>
      <v-card-text class="white--text">WPM:{{ result.wpm}}</v-card-text>
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

</style>