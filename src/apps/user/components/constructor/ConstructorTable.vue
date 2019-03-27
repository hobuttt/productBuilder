<template>

    <v-data-table
            :items="layers"
            class="elevation-1"
            hide-actions
            :headers="headers"
    >
      <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
      <template slot="items" slot-scope="props">
        <td class="text-xs-center">{{props.item.type}}</td>
        <td class="text-xs-center">{{props.item.height}}</td>
        <td class="text-xs-center">{{props.item.actions}}</td>
      </template>
    </v-data-table>
</template>

<script>
export default {
  name: 'ConstructorTable',
  data () {
    return {
      headers: [
        {
          text: 'type',
          align: 'center',
          sortable: false
        },
        {
          text: 'height',
          align: 'center',
          sortable: false
        },
        {
          text: 'actions',
          align: 'center',
          sortable: false
        }
      ]
    }
  },
  computed: {
    layers () {
      return this.$store.getters.getLayers
    }
  }
}
</script>

<style scoped>

</style>
