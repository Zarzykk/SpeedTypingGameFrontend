<template>
  <v-container>
    <v-main class="align-md-center mt-lg-16" >
      <v-row >
        <v-col cols="8" class="mx-auto">
          <v-card app dark class="mt-lg-16 wrapper rounded-xl">
            <v-card-title class="timer justify-center ma-md-8">{{timer}}</v-card-title>

            <v-container>
              <v-card color="grey darken-3" min-height="100px">
                <v-card-text v-for="t in text" :key="t.id" class="white--text">{{ t.description }}</v-card-text>
              </v-card>
            </v-container>

            <v-card-actions>
            <v-textarea outlined class="mt-lg-16" id="quoteWrite">

            </v-textarea>
          </v-card-actions>

          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-container>
</template>

<script>


export default {
  name: "Typing",
  data(){
    return {
      timer:0,
    }
  },
  methods:{
    countTime(){
      if(this.timer <999) {
        setTimeout(() => {
          this.timer += 1
          this.countTime()
        }, 1000)
      }
    }
  },
mounted(){
  this.text = this.$store.getters.getText;
  this.countTime()
}

}
</script>
<style scoped>
.timer{
  font-size: 5rem;
}

</style>