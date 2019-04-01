<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form
              v-model="valid"
              ref="form"
              lazy-validation
            >
              <v-text-field
                prepend-icon="person"
                name="email"
                label="Email"
                type="text"
                v-model="email"
                :rules="emailRules"
              >
              </v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
                v-model="password"
                :rules="passwordRules"
              >
              </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="onSubmit"
              :disabled="!valid"
            >Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      valid: false,
      emailRules: [
        v => !!v || this.$t('forms.validationField'),
        v => /.+@.+/.test(v) || this.$t('forms.validationEmail')
      ],
      passwordRules: [
        v => !!v || this.$t('forms.validationField'),
        v => (v && v.length >= 6) || this.$t('forms.validationPasswordLength')
      ]
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const USER = {
          email: this.email,
          password: this.password
        }
        console.log(USER)
      }
    }
  }
}
</script>

<style scoped>

</style>
