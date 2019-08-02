<template>
<div class="ion-page">
  <h1>{{ $t('quotes') }}</h1>
  <ion-content
    :scrollEvents="true">
    <div class="spin" v-if="loading">
        <ion-spinner name="crescent"></ion-spinner>
    </div>
    <div  class = "b-container" >
      <div class = "row" v-for='(g, groupIndex) in groupedItems' :key="groupIndex" >
        <div class = "col-md-6" v-for='(item, index) in g' :key="index">
          <div v-if="index % 2">
            <QuoteLeft key="item._id" v-if="!loading"
              :quote="item"
              :showMore= true

            />
          </div>
          <div v-else>
            <QuoteRight key="item._id" v-if="!loading"
              :quote="item"
              :showMore= true
            />
          </div>

        </div>
      </div>
    </div>
  </ion-content>
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
