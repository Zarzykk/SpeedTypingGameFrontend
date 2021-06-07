<template>
  <v-container>
    <v-main class="align-md-center mt-lg-16" >
      <v-row >
        <v-col cols="8" class="mx-auto">
          <v-card app dark class="mt-lg-16 wrapper rounded-xl">
            
            <v-card-title class="timer justify-center ma-md-8">{{timer}}</v-card-title>

            <v-container>
              <v-card color="grey darken-2" min-height="100px" >
                <v-card-text v-if="isHidden">{{ chars }}</v-card-text>
              </v-card>
            </v-container>


            <v-textarea :maxlength="textLength" outlined class="mt-lg-16 mx-5"
                        v-model="inputValue" @keypress="checkCharacter" :disabled="gameOver ">

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
      inputValue:"",
      gameOver:false,
      chars:[],
      typedWords:[],
      textLength:0,
      mistakes:0
    }
  },
  methods:{
    startTyping(){
      this.startTimer()
      this.showText()
      this.setLength()
    },
    isGameOver(){
      let correctChars = 0;
      for(let i=0;i<this.chars.length;i++){
        if(this.typedWords[i]==="correct")
          correctChars++;
      }
      if(correctChars===this.chars.length) {
        this.gameOver = true;
        console.log(this.timer)
        console.log(this.mistakes)
      }
    },
    setLength(){
      this.textLength = this.chars.length
    },
    checkCharacter(event){
        if(this.gameOver) return;
      let currentIndex = event.target.selectionStart;
      let inputChar = String.fromCharCode(event.keyCode);
        if (this.chars[currentIndex] === inputChar)
          this.typedWords[currentIndex] = "correct";
        else {
          this.typedWords[currentIndex] = "incorrect";
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
    }
  }

}
</script>
<style scoped>
.timer{
  font-size: 5rem;
}

.correct {
  color: lime;
}

.incorrect {
  color: red;
}

</style>