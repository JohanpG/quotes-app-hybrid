<template>
<div class="ion-page">
  <ion-content
    :scrollEvents="true">
    <div class="spin" v-if="loading">
        <ion-spinner name="crescent"></ion-spinner>
    </div>
    <ion-list  v-if="!loading">
        <ion-list-header>
          <h1>{{ $t('quotes') }}</h1>
        </ion-list-header>

        <ion-item v-for='(currentQuote, groupIndex) in allQuotes' :key="groupIndex">
          <ion-avatar slot="start">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/812449/user-blue1.jpg">
          </ion-avatar>
          <ion-label>
            <div class = 'quote-to' v-show= "currentQuote.to"  >
              <h4>A {{ currentQuote.to }}</h4>
            </div>
              <p>{{ currentQuote.quote }} ... </p>
            <div class = 'quote-author'>
              <h4>- {{ currentQuote.author }}</h4>
              <h5>  {{ currentQuote.date }}</h5>
            </div>
          </ion-label>
        </ion-item>
      </ion-list>
  </ion-content>
  <br>
  <b-pagination
      v-model="paginationDetails.currentPage"
      align="center"
      :total-rows="paginationDetails.totalItems"
      :per-page="paginationDetails.perPage"
      @input ="updatePage(paginationDetails.currentPage)"
    >
    </b-pagination>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import QuoteLeft from '@/components/QuoteLeft.vue'
import QuoteRight from '@/components/QuoteRight.vue'

export default {
  components: {
    QuoteLeft,
    QuoteRight
  },
  data() {
    return {
      loading: true,
      groupedItems: [],
      componentKey: 0,
    }

  },
  methods: {
    ...mapActions([
      'refreshQuotes',
      'refreshQuotesPaginated'
    ]),
    chunk: function(arr, size) {
      var newArr = []
      for (var i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size))
      }
      this.groupedItems = newArr
      console.log(newArr)
    },
    updatePage: function(page){
      this.loading=true
      this.refreshQuotesPaginated(page)
      .then(() => {
        this.chunk(this.allQuotes, 2) // 3 is the number of colums
        this.loading=false
      })
      // this.$store.dispatch('updatePage', page); console.log("Hit me")
    },
    forceRerender() {
      this.componentKey += 1;
    }
  },
  computed: {
    ...mapState([
      'allQuotes',
      'paginationDetails'
    ])
  },
  created: function () {
    // divide into n groups
    // this.chunk(this.refreshQuotes, Math.ceil(this.refreshQuotes.length / 3)) // 3 is the number of colums
    // this.refreshQuotes()
    this.refreshQuotesPaginated(this.paginationDetails.currentPage)
    .then(() => {
      this.chunk(this.allQuotes, 2) // 3 is the number of colums
      this.loading=false
    })
  }
}
</script>
