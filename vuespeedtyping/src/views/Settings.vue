<template>
  <v-container>
    <v-content class="align-md-center mt-lg-16 " >
          <v-card app dark width="50%" class="mt-lg-16 wrapper mx-auto">
            <v-card-title class="justify-center" >Change password</v-card-title>
            <v-card-text>
            <v-text-field label="Old password"
                          :type="showPassword ? 'text' :'password'"
                          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                          @click:append="showPassword =! showPassword" outlined></v-text-field>
            <v-text-field label="New password"
                          :type="showPassword ? 'text' :'password'"
                          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                          @click:append="showPassword =! showPassword" outlined></v-text-field>
            <v-text-field label="Repeat new password"
                          :type="showRepeatedPassword ? 'text' :'password'"
                          :append-icon="showRepeatedPassword ? 'mdi-eye' : 'mdi-eye-off'"
                          @click:append="showRepeatedPassword =! showRepeatedPassword" outlined></v-text-field>
            </v-card-text>
            <v-card-actions >
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

</style>