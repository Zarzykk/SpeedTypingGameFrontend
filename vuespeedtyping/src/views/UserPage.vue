<template>
<v-container>
  <v-content class="align-md-center mt-lg-16 fadeInDown" >
      <v-row >
        <v-col cols="8" class="mx-auto fadeIn">
        <v-card app dark class="mt-lg-16 wrapper" height="45vh" >
          <v-card-actions class="fadeIn second"  >
            <v-btn rounded small width="15%"  color="grey darken-3" to="/home">Log out</v-btn>
            <v-btn rounded small width="15%"  color="grey darken-3" to="/settings">Settings</v-btn>
          </v-card-actions>
          <v-card-actions class="justify-center fadeIn third">
            <v-btn rounded x-large width="60%" color="grey darken-3" class="mt-lg-16" to="/typing">Start typing</v-btn>
          </v-card-actions>
          <v-card-actions class="justify-center fadeIn fourth">
          <v-btn rounded x-large width="60%" color="grey darken-3" class="mt-lg-16" to="/results">Check your results</v-btn><br>
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