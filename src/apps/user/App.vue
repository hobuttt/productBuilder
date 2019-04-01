<template>
  <v-app>
    <router-view/>
    <v-snackbar
    v-model="snackbar.active"
    :bottom="true"
    :auto-height="true"
    :timeout="2000"
    :color="snackbar.type"
    >
    <v-flex class="text-md-center font-weight-black">
    {{ snackbar.text }}
    </v-flex>
    </v-snackbar>
    <!--<v-footer :fixed="fixed" app>-->
      <!--<span>&copy; 2019</span>-->
    <!--</v-footer>-->
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
      title: 'Vuetify.js'
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
