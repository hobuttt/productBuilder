<template>
  <v-app class="transparent">
    <v-navigation-drawer
            persistent
            :mini-variant="miniVariant"
            :clipped="clipped"
            v-model="drawer"
            enable-resize-watcher
            fixed
            app
    >
      <v-list >
        <v-list-tile
                :key="link.title"
                :to="link.url"
                active-class="secondary--text"
                v-for="link of links"
        >
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile @click="logout" v-if="isUserIsLoggIn">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('layout.logout')}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app
               :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title >Топ</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <v-navigation-drawer
            temporary
            right="right"
            v-model="rightDrawer"
            fixed
            app
    >
      <v-list>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title> drawer </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
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
      rightDrawer: false
    }
  },
  computed: {
    isUserIsLoggIn () {
      return this.$store.getters.getUserIsLoggIn
    },
    links () {
      if (this.isUserIsLoggIn) {
        return [
          { title: this.$t('layout.home'), icon: 'home', url: '/title' },
          { title: this.$t('layout.constructor'), icon: 'dashboard', url: '/cake-builder' }
        ]
      } else {
        return [
          { title: this.$t('layout.login'), icon: 'vpn_key', url: '/login' },
          { title: this.$t('layout.registration'), icon: 'home', url: '/registration' },
          { title: this.$t('layout.home'), icon: 'home', url: '/title' }
        ]
      }
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
