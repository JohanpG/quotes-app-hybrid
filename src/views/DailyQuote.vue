<template>
<div class="ion-page">
    <div class="spin" v-if="loading">
        <ion-spinner name="crescent"></ion-spinner>
    </div>
    <ion-card v-if="!loading">
        <ion-card-header>
          <ion-card-title>{{ $t('today') }} : <h1>{{dailyQuote.validDate}}</h1></ion-card-title>
          <ion-card-subtitle><h1>{{ $t('quoteOfTheDay') }} :</h1> </ion-card-subtitle>
        </ion-card-header>
        <br>
         <QuoteLeft key="dailyQuote._id" v-if="!loading"
           :quote="dailyQuote"
         />
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
      loading: true
    }
  },
  computed: {
  ...mapState([
    'dailyQuote'
  ])
  },
  methods: {
    ...mapActions([
      'refreshDailyQuote'
    ])
  },
  created: function () {
    this.refreshDailyQuote()
    .then(() => {
      this.loading=false
    })
  }
}
</script>
