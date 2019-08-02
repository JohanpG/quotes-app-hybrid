<template>
<div class="ion-page">
<!-- Crescent -->
<ion-spinner name="crescent" v-if="loading"></ion-spinner>
<ion-card>
    <ion-card-header>
      <ion-card-title><h1>{{ $t('quote') }}</h1></ion-card-title>
    </ion-card-header>
 <br>
  <QuoteLeft v-if="quoteByID"
    :quote="quoteByID"
  />
  <social-sharing v-bind:url= "fullURL"
                   v-bind:title="$t('shareTittle')"
                   v-bind:description="$t('shareDescription')"
                   v-bind:quote="quoteByID.quote"
                   hashtags="quotes"
                   twitter-user="quotes-app"
                   inline-template>
 <div>
     <network network="facebook">
       <ion-icon name="logo-facebook"></ion-icon> Facebook
     </network>
     <network network="twitter">
       <ion-icon name="logo-twitter"></ion-icon> Twitter
     </network>
     <network network="whatsapp">
       <ion-icon name="logo-whatsapp"></ion-icon> Whatsapp
     </network>
 </div>
 </social-sharing>
 </ion-card>
</div>
</template>
<script>

import { mapActions, mapState } from 'vuex'
import QuoteLeft from '@/components/QuoteLeft.vue'

export default {
  components: {
    QuoteLeft
  },
  data() {
    return {
      quoteSelected: {},
      loading: true,
      fullURL: document.URL
    }
  },
  computed: {
    ...mapState([
      'quoteByID'
    ])
  },
  methods: {
    ...mapActions([
      'refreshQuoteById'
    ])
  },
  created: function () {
    this.refreshQuoteById(this.$route.params.id)
    .then(() => {
      this.loading=false
    })
  }
}
</script>
