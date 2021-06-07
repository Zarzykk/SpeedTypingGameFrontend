<template>
  <v-container>
    <v-content class="align-md-center mt-lg-16 fadeInDown" >
          <v-card app dark width="50%" class="mt-lg-16 wrapper mx-auto fadeIn">
            <v-card-title class="justify-center fadeIn" >Change password</v-card-title>
            <v-card-text>
            <v-text-field class="fadeIn second" label="Old password"
                          :type="showPassword ? 'text' :'password'"
                          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                          @click:append="showPassword =! showPassword" outlined></v-text-field>
            <v-text-field class="fadeIn third" label="New password"
                          :type="showPassword ? 'text' :'password'"
                          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                          @click:append="showPassword =! showPassword" outlined></v-text-field>
            <v-text-field class="fadeIn fourth" label="Repeat new password"
                          :type="showRepeatedPassword ? 'text' :'password'"
                          :append-icon="showRepeatedPassword ? 'mdi-eye' : 'mdi-eye-off'"
                          @click:append="showRepeatedPassword =! showRepeatedPassword" outlined></v-text-field>
            </v-card-text>
            <v-card-actions class="fadeIn fourth"  >
              <v-spacer/>
              <v-btn rounded color="grey darken-3">Save</v-btn>
              <v-btn rounded color="grey darken-3" to="/userpage">Back</v-btn>
              <v-spacer/>
            </v-card-actions>
          </v-card>
    </v-content>
  </v-container>
</template>

<script>
export default {
name: "Settings",
  data:() =>{
    return{
      showPassword:false,
      showRepeatedPassword : false
    }
  }
}
</script>

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