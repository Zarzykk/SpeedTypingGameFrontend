<template>
  <v-container>
    <v-content class="align-md-center mt-lg-16 " >
      <v-card app dark width="35%" class="mx-auto mt-lg-16 wrapper fadeInDown">
        <v-window v-model="step">
          <v-window-item :value="1">
            <v-card-title class="justify-center fadeIn ">Log in</v-card-title>

            <v-divider/>

            <v-card-text>
              <v-text-field label="E-mail" prepend-icon="mdi-account-circle" class="fadeIn second" outlined></v-text-field>
              <v-text-field label="Password"
                            :type="showPassword ? 'text' :'password'"
                            prepend-icon="mdi-lock"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showPassword =! showPassword" class="fadeIn third" outlined></v-text-field>
            </v-card-text>

            <v-divider/>


            <v-card-actions >
              <v-spacer/>
              <v-btn rounded color="grey darken-3" class="fadeIn fourth" >Login</v-btn>
              <v-btn rounded color="grey darken-3" class="fadeIn fourth" @click="step++">Register</v-btn>
              <v-spacer/>
            </v-card-actions>
          </v-window-item>
          <v-window-item :value="2">

            <v-card-title class="justify-center fadeIn ">Register</v-card-title>

            <v-divider/>

            <v-card-text>
              <v-text-field label="E-mail" prepend-icon="mdi-account-circle" class="fadeIn second" outlined></v-text-field>
              <v-text-field label="Password"
                            :type="showPassword ? 'text' :'password'"
                            prepend-icon="mdi-lock"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showPassword =! showPassword" class="fadeIn third" outlined></v-text-field>
              <v-text-field label="Repeat password"
                            :type="showRepeatedPassword ? 'text' :'password'"
                            prepend-icon="mdi-lock"
                            :append-icon="showRepeatedPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showRepeatedPassword =! showRepeatedPassword" class="fadeIn third" outlined></v-text-field>
            </v-card-text>

            <v-divider/>


            <v-card-actions >
              <v-spacer/>
              <v-btn rounded color="grey darken-3" class="fadeIn fourth" @click="step--">Register</v-btn>
              <v-btn rounded color="grey darken-3" class="fadeIn fourth" @click="step--">Back</v-btn>
              <v-spacer/>
            </v-card-actions>

          </v-window-item>

        </v-window>
      </v-card>
    </v-content>
  </v-container>
</template>


<style scoped>


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

<script>
export default {
  data:() =>{
    return{
      step:1,
      showPassword:false,
      showRepeatedPassword : false
    }
  }
}
</script>