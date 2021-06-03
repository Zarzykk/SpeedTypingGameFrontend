<template>
  <v-container>
    <v-content class="align-md-center mt-lg-16" >
      <v-row >
        <v-col cols="8" class="mx-auto">
          <v-card app dark class="mt-lg-16 wrapper rounded-xl">
            <v-card-title class="timer justify-center ma-md-8">0</v-card-title>

            <v-card-text class="quoteDisplay mt-lg-16" ></v-card-text>

            <v-card-actions>
            <v-textarea outlined class="mt-lg-16" id="quoteWrite">

            </v-textarea>
          </v-card-actions>

          </v-card>
        </v-col>
      </v-row>
    </v-content>
  </v-container>
</template>

<script>

export default {
  name: "Typing",
  methods:{
  }
}
</script>
<style scoped>
.timer{
  font-size: 5rem;
}

.quoteDisplay{
  font-size: 1rem;
}
</style>