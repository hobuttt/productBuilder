<template>
  <v-container grid-list-lg>
    <v-card>
      <v-card-title class="headline font-weight-regular secondary white--text">
        Конструктор
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text>
        <v-layout row wrap align-center>
          <v-flex sm7>
            <constructor></constructor>
          </v-flex>
          <v-flex sm5>
            <constructor-table></constructor-table>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>

    <v-layout row wrap align-center>
      <v-flex sm12>
        <calculation></calculation>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import Constructor from '@user/components/constructor/Constructor'
import ConstructorTable from '@user/components/constructor/ConstructorTable'
import Calculation from '@user/components/constructor/Calculation'

export default {
  data () {
    return {
    }
  },
  components: { Constructor, ConstructorTable, Calculation },
  computed: {

  },
  methods: {
    addLayer () {
      this.layers.push(this.layersList.beze)
    }
  }
}
</script>
<style scoped lang="scss">

</style>
