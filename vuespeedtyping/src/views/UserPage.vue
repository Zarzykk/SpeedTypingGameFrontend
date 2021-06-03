<template>
<v-container>
  <v-content class="align-md-center mt-lg-16" >
      <v-row >
        <v-col cols="8" class="mx-auto">
        <v-card app dark class="mt-lg-16 wrapper rounded-xl">
          <br><br><br><br><br>
          <v-card-actions class="justify-center">
            <v-btn x-large width="60%" color="grey darken-3" to="/typing">Start typing</v-btn>
          </v-card-actions>
          <br><br><br><br><br>
          <v-card-actions class="justify-center">
          <v-btn x-large width="60%" color="grey darken-3" to="/results">Check your results</v-btn><br>
          </v-card-actions>
          <br><br><br><br><br>
          <v-divider/>
          <v-card-actions class="justify-lg-end">
          <v-btn small width="15%" color="grey darken-3">Settings</v-btn>
          <v-btn small width="15%" color="grey darken-3" to="/home">Log out</v-btn>
          </v-card-actions>
        </v-card>
        </v-col>
      </v-row>
  </v-content>
</v-container>
</template>

<script>
export default {
name: "UserPage"
}
</script>

<style scoped>

</style>