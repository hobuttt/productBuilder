<template>
  <v-app >
    <router-view/>
    <v-snackbar
    v-model="snackbar.active"
    :bottom="true"
    :auto-height="true"
    :timeout="3000"
    :color="snackbar.type"
    >
    <v-flex class="text-md-center font-weight-black">
    {{ snackbar.text }}
    </v-flex>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      messages: ['11', '22']
    }
  },
  name: 'App',
  computed: {
    snackbar () {
      return this.$store.getters.getSnackbar
    }
  }
}
</script>
