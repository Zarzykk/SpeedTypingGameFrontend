<template>
  <v-container>
    <v-main class="align-md-center mt-lg-16" >
      <v-row >
        <v-col cols="8" class="mx-auto fadeInDown">
          <v-card app dark class="mt-lg-16 wrapper rounded-xl fadeIn">
            <v-window v-model="step">
              <v-window-item :value="1">
            <v-card-title class="timer justify-center ma-md-8 fadeIn ">{{timer}}</v-card-title>

            <v-container>
              <v-card color="grey darken-2" min-height="150px" class="fadeIn second" >
                <v-card-text v-if="isHidden">{{ chars }}</v-card-text>
              </v-card>
            </v-container>


            <v-textarea :maxlength="textLength" outlined class="mt-lg-16 mx-5 fadeIn third"
                        v-model="inputValue" @keypress="checkCharacter" :disabled="gameOver ">

            </v-textarea>
            <v-card-actions class="mx-5 justify-center fadeIn fourth" >
              <v-btn rounded x-large width="60%" color="grey darken-3" @click="startTyping"
                     v-if="!isHidden" v-on:click="isHidden = true"> Start</v-btn>
          </v-card-actions>
              </v-window-item>

              <v-window-item :value="2">
                <v-container style="min-height: 300px">
                    <v-card-subtitle class="subtitle fadeIn">Text:</v-card-subtitle>
                    <v-card-text class="white--text results fadeIn">{{chars}}</v-card-text>
                    <v-card-subtitle class="subtitle fadeIn second">WPM:</v-card-subtitle>
                    <v-card-text class="white--text results fadeIn second">{{WPM}}</v-card-text>
                    <v-card-subtitle class="subtitle fadeIn third">Time:</v-card-subtitle>
                    <v-card-text class="white--text results fadeIn third">{{ stopTimer }}</v-card-text>
                    <v-card-subtitle class="subtitle fadeIn fourth">Accuracy:</v-card-subtitle>
                    <v-card-text class="white--text results fadeIn fourth">{{accuracy}}</v-card-text>
                    <v-card-actions  class="justify-center fadeIn fourth">
                      <v-btn rounded x-large width="60%" color="grey darken-3" to="/userpage">Back to userpage</v-btn>
                    </v-card-actions>
                </v-container>
              </v-window-item>
              </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-container>
</template>

<script>


import axios from "axios";

export default {
  name: "Typing",
  data(){
    return {
      timer:0,
      text:"",
      isHidden:false,
      inputValue:"",
      gameOver:false,
      chars:[],
      typedWords:[],
      textLength:0,
      mistakes:0,
      step:1,
      stopTimer:0,
      WPM:0,
      correctChars:0,
      accuracy:0,
      mistake:false
    }
  },
  methods:{
    startTyping(){
      this.startTimer()
      this.showText()
      this.setLength()
    },
    isGameOver(){
      for(let i=0;i<this.chars.length;i++){
        if(this.typedWords[i]==="correct")
          this.correctChars++;
      }
      if(this.correctChars===this.chars.length) {
        this.gameOver = true;
        this.stopTimer=this.timer
        this.calculateWPM()
        this.calculateAccuracy()
        this.step++;
        this.addResult();
      }
    },
    calculateAccuracy(){
      this.accuracy = this.correctChars/(this.correctChars+this.mistakes)*100
      this.accuracy = this.accuracy.toFixed(2)
    },
    calculateWPM(){
      this.WPM=((this.correctChars + this.mistakes)/5)/(this.stopTimer/60)
      this.WPM = this.WPM.toFixed(1)
    },
    setLength(){
      this.textLength = this.chars.length
    },
    checkCharacter(event){
        if(this.gameOver) return;
      let currentIndex = event.target.selectionStart;
      let inputChar = String.fromCharCode(event.keyCode);
        if (this.chars[currentIndex] === inputChar) {
          this.typedWords[currentIndex] = "correct";
          this.mistake = false
        }
        else {
          this.typedWords[currentIndex] = "incorrect";
          this.mistake = true
          this.mistakes++;
        }
      if(currentIndex===this.chars.length-1)
          this.isGameOver()
    },
    showText(){
      this.text = this.$store.getters.getText
      this.chars = this.text[0].description
    },
    startTimer(){
      if(!this.gameOver) {
        setTimeout(() => {
          this.timer += 1
          this.startTimer()
        }, 1000)
      }
    },async addResult(){
      const saveResult = await axios.post("http://localhost:3000/api/users/1/results",
          {
            "time":this.stopTimer,
            "wpm":this.WPM,
            "accuracy":this.accuracy,
            "text_id":this.text[0].id,
            "user_id":1
          });
      console.log("test czy dziala")
    console.log(saveResult)
    }
  }

}
</script>
<style scoped>
.timer{
  font-size: 5rem;
}

.subtitle{
  font-size: 1.4rem;
}
.results{
  font-size:1rem;
}

.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
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