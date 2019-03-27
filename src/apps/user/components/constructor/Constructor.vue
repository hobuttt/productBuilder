<template>
  <div>
    <v-spacer></v-spacer>
    <v-btn @click="addLayer" class="mt-0">
      Добавить слой
    </v-btn>
    <v-layout row>
      <v-flex offset-sm1 sm10>
        <v-list
          v-for="layer in layers"
          :key="layer.i"
        >
          <v-card-media :src="layer.img" style="height: 20px"></v-card-media>
        </v-list>
      </v-flex>
    </v-layout>
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
          label: 'Бисквит',
          img: 'https://media.istockphoto.com/photos/sponge-texture-background-picture-id482894144'
        },
        curd: {
          price1sm: 40,
          label: 'Крем',
          src: 'https://st2.depositphotos.com/4196725/6839/i/950/depositphotos_68394425-stock-photo-clean-white-stone-texture.jpg'
        },
        beze: {
          price1sm: 30,
          label: 'Безе',
          src: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX27105643.jpg'
        }
      },
      defaultLayerType: 'bisquit',
      defaultLayerHeight: 2
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
        type: this.defaultLayerType,
        height: this.defaultLayerHeight,
        img: 'https://media.istockphoto.com/photos/sponge-texture-background-picture-id482894144'
      }
      this.$store.commit('addLayer', LAYER)
    }
  }
}
</script>

<style scoped>

</style>
