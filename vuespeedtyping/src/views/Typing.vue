<template>
  <v-container>
    <v-main class="align-md-center mt-lg-16" >
      <v-row >
        <v-col cols="8" class="mx-auto">
          <v-card app dark class="mt-lg-16 wrapper rounded-xl">
            <v-card-title class="timer justify-center ma-md-8">{{timer}}</v-card-title>

            <v-container>
              <v-card color="grey darken-2" min-height="100px" >
                <v-card-text v-for="text in text" :key="text.id" class="white--text">{{ text.description }}</v-card-text>
              </v-card>
            </v-container>


            <v-textarea outlined class="mt-lg-16 mx-5">

            </v-textarea>
            <v-card-actions class="mx-5">
              <v-btn rounded color="grey darken-3" @click="startTyping" v-if="!isHidden" v-on:click="isHidden = true"> Start</v-btn>
              <v-spacer/>
              <v-btn rounded color="grey darken-3" to="/userpage"> Back</v-btn>
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
      text:"",
      isHidden:false,
    }
  },
  methods:{
    startTyping(){
      this.startTimer()
      this.showText()
    },
    showText(){
      this.text = this.$store.getters.getText;
    },
    startTimer(){
      if(this.timer <999) {
        setTimeout(() => {
          this.timer += 1
          this.startTimer()
        }, 1000)
      }
    }
  }

}
</script>
<style scoped>
.timer{
  font-size: 5rem;
}

</style>