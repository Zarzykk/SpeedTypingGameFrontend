<template>
  <v-container>
    <v-card color="grey darken-3" min-height="100px">
      <v-card-text v-for="t in text" :key="t.id" class="white--text">{{ t.description }}</v-card-text>
    </v-card>
    </v-container>
</template>

<script>
export default {
  name: "TextCard",
  data: () =>({
    text:""
  }),
  mounted(){
        this.text = this.$store.getters.getText;
  }
}
</script>

<style scoped>

</style>