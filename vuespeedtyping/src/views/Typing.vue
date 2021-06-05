<template>
  <v-container>
    <v-main class="align-md-center mt-lg-16" >
      <v-row >
        <v-col cols="8" class="mx-auto">
          <v-card app dark class="mt-lg-16 wrapper rounded-xl">
            <v-card-title class="timer justify-center ma-md-8" :value="display"></v-card-title>

                <TextCard></TextCard>

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
import TextCard from "../components/TextCard";


export default {
  name: "Typing",
  components: {TextCard},
  methods:{
    startTimer(){

        setInterval(() =>{
          this.getTimerTime()},1000
        )
    },
    getTimerTime(){
      return Math.floor((new Date()-this.startTime)/1000)
    }

  }

}
</script>
<style scoped>
.timer{
  font-size: 5rem;
}

</style>