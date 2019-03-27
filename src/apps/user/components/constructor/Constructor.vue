<template>
  <div>
    <v-spacer></v-spacer>
    <v-btn @click="addLayer">
      Добавить слой
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Constructor',
  data () {
    return {
      layersList: {
        bisquit: {
          price1sm: 50,
          label: 'Бисквит'
        },
        curd: {
          price1sm: 50,
          label: 'Крем'
        },
        beze: {
          price1sm: 50,
          label: 'Безе'
        }
      },
      defaultLayer: 'bisquit',
      defaultHeight: 3
    }
  },
  computed: {
    layers () {
      return this.$store.getters.getLayers
    }
  },
  methods: {
    addLayer () {
      const LAYER = {
        type: '',
        height: 1
      }
      this.$store.commit('addLayer', LAYER)
    }
  }
}
</script>

<style scoped>

</style>
