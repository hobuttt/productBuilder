<template>
  <div>
    <v-spacer></v-spacer>
    <v-btn @click="addLayer" class="mt-0">
      Добавить слой
    </v-btn>
    <v-layout row>
      <v-flex offset-sm1 sm10>
        <div
          v-for="layer in layers"
          :key="layer.i"
        >
          <v-img :src="layer.src" :style="{height: layer.height * 10 + 'px'}" class="mt-0 mb-0"></v-img>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Constructor',
  data () {
    return {
      defaultLayerLabel: 'Бисквит',
      defaultLayerHeight: 4
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
        label: this.defaultLayerLabel,
        height: this.defaultLayerHeight,
        src: 'https://media.istockphoto.com/photos/sponge-texture-background-picture-id482894144',
        id: Math.random()
      }
      this.$store.commit('addLayer', LAYER)
    }
  }
}
</script>

<style scoped>

</style>
