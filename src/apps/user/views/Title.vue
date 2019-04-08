<template>
  <ul>
     <li v-for="message in messages" :key="message">
       {{ message }}
     </li>
  </ul>
</template>

<script>
export default {
  props: ['messages']
}
</script>

<style scoped>

</style>
