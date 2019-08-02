<template>
  <div>
    <h1>Quotes</h1>
    <b-table striped hover :items="quotes">
      <template slot="_id" slot-scope="data">
        <router-link :to="`/quotes/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    quotes: Array
  }
}
</script>
