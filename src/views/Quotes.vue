<template>
<div class="ion-page">
  <ion-item slot="end" @click="openModal" color="light">
    <ion-icon name="funnel"></ion-icon>
    <ion-label>Filters</ion-label>
  </ion-item>
  <h1>{{ $t('quotes') }}</h1>
  <ion-content
    :scrollEvents="true">
    <div class="spin" v-if="loading">
        <ion-spinner name="crescent"></ion-spinner>
    </div>
    <div  class = "b-container" v-if="groupedItems">
      <div class = "row"  v-for='(g, groupIndex) in groupedItems' :key="groupIndex" >
        <div class = "col-md-6" v-for='(item, index) in g' :key="index">
          <div v-if="index % 2">
            <QuoteLeft key="item._id"
              :quote="item"
              :showMore= true

            />
          </div>
          <div v-else>
            <QuoteRight key="item._id"
              :quote="item"
              :showMore= true
            />
          </div>

        </div>
      </div>
    </div>
    <ion-infinite-scroll @ionInfinite="updatePage" threshold="100px" position="bottom">
      <ion-infinite-scroll-content>
        <ion-spinner name="crescent" v-if="loading"></ion-spinner>
      </ion-infinite-scroll-content>
    </ion-infinite-scroll>
  </ion-content>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ModalFilters from "@/components/modals/ModalFilters.vue";
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
      sortby:"Newest",
    }

  },
  methods: {
    ...mapActions([
      'refreshQuotes',
      'loadmoreQuotes'
    ]),
    chunk: function(arr, size) {
      var newArr = []
      for (var i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size))
      }
      this.groupedItems = newArr
      console.log(newArr)
    },
    async openModal() {
        let modal = await this.$ionic.modalController.create({
          component: ModalFilters,
          componentProps: {
            propsData: {
              sortBy: this.sortby
            }
          }
        });
        // show the modal
        await modal.present();
        // wait to see if i get a response
        let {
          data: { success, sortbySelection }
        } = await modal.onDidDismiss();
        if (success && sortbySelection!=this.sortby) {
          this.sortby = sortbySelection;
          const payload = {
            current: 0,
            sortby: this.sortby

          }
          this.$store.state.allQuotes=[]
          this.groupedItems=[]
          this.loadmoreQuotes(payload)
          .then(() => {
            this.loading=false
          })
        }
      },
    updatePage: function(event){
      this.loading=true
      const payload = {
        current: this.paginationDetails.currentLoaded,
        sortby: this.sortby

      }
      this.loadmoreQuotes(payload)
      .then(() => {
        this.chunk(this.allQuotes, 2) // 3 is the number of colums
        this.loading=false
      })
      event.target.complete();
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
      if(this.groupedItems.length <1)
      {
        this.loading=true
        const payload = {
          current: this.paginationDetails.currentLoaded,
          sortby: this.sortby

        }
        this.loadmoreQuotes(payload)
        .then(() => {
          this.chunk(this.allQuotes, 2) // 3 is the number of colums
          this.loading=false
        })
      }
      else
      {
        this.loading=false
      }
    }
}
</script>
