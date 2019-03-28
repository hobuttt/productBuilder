<template>

    <v-data-table
            :items="layers"
            class="elevation-1"
            hide-actions
            :headers="headers"
    >
      <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
      <template slot="items" slot-scope="props">
        <td class="text-xs-center">
          <v-select
            :items="layersList"
            item-text="label"
            return-object
            style="width: 100%"
            v-model="layerCh"
            @change="changeLayerType"
          ></v-select>

        </td>
        <td class="text-xs-center">
          <v-text-field
            type="number"
            style="width: 50%; margin: 0 auto"
            v-model="props.item.height"
          >
          </v-text-field>
        </td>
        <td class="text-xs-center">
          {{props.item.actions}}
        </td>
      </template>
    </v-data-table>
</template>

<script>
export default {
  name: 'ConstructorTable',
  data () {
    return {
      layerCh: {},
      headers: [
        {
          text: 'Тип',
          align: 'center',
          sortable: false,
          width: '40%'
        },
        {
          text: 'Высота',
          align: 'center',
          sortable: false,
          width: '20%'
        },
        {
          text: 'Действия',
          align: 'center',
          sortable: false,
          width: '30%'
        }
      ],
      layersList: [
        {
          price1sm: 50,
          label: 'Бисквит',
          src: 'https://media.istockphoto.com/photos/sponge-texture-background-picture-id482894144'
        },
        {
          price1sm: 40,
          label: 'Крем',
          src: 'https://st2.depositphotos.com/4196725/6839/i/950/depositphotos_68394425-stock-photo-clean-white-stone-texture.jpg'
        },
        {
          price1sm: 30,
          label: 'Безе',
          src: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX27105643.jpg'
        }
      ]
    }
  },
  computed: {
    layers () {
      return this.$store.getters.getLayers
    }
  },
  methods: {
    changeLayerType () {
    }
  }
}
</script>

<style scoped>

</style>
