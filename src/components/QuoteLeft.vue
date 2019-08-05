<template>
  <div>
    <div class = 'quote-left' v-on:dblclick="redirectToId">
      <div class = 'quote-image'></div>
      <div class = 'quote-circle'>
        <div class = 'quote-circle-inner'>
          <i class="fa fa-quote-left"></i>
        </div>
      </div>
      <div class = 'quote-text'>
        <div class = 'quote-to' v-show= "quote.to"  >
          <p>A   {{ quote.to }}</p>
        </div>
        <p>{{ quote.quote }} ... </p>
        <div class = 'quote-author'>
          <p>- {{ quote.author }}</p>
          <p> {{ quote.date }}</p>
        </div>
        <ion-button size="small" color="primary" v-if="showMore" @click="redirectToId">{{ $t('seeMore') }}</ion-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToId () {
       this.$router.push(
          {
            path: '/quotes/' + this.quote._id,
          })
        }
    },
  props: {
    quote: Object,
    showMore: false
  }
}

</script>
