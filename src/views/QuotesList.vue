<template>
<div class="ion-page">
  <ion-content
    :scrollEvents="true">
    <div class="spin" v-if="loading">
        <ion-spinner name="crescent"></ion-spinner>
    </div>
    <ion-grid>
        <ion-row>
          <ion-col size="12" size-md>
            <ion-button
              expand="block"
              @click="openModal"
              >Modal</ion-button>
          </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="12" size-md>
          <ion-list  v-if="!loading">
              <ion-list-header>
                <h1>{{ $t('quotes') }}</h1>
              </ion-list-header>

              <ion-item v-for='(currentQuote, groupIndex) in groupedItems' :key="currentQuote._id">
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
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-infinite-scroll @ionInfinite="updatePage" threshold="100px" position="bottom">
        <ion-infinite-scroll-content></ion-infinite-scroll-content>
      </ion-infinite-scroll>
  </ion-content>
</div>
</template>

<script>
import SimpleModal from "@/components/modals/SimpleModal.vue";
import { mapActions, mapState } from 'vuex'

export default {
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
      'loadmoreQuotes'
    ]),
    chunk: function() {

      this.groupedItems = this.allQuotes
      console.log(this.groupedItems)
    },
    openEnd () {
      document.querySelector('ion-menu-controller').open('end')
    },
    closeEnd () {
      document.querySelector('ion-menu-controller').close('end')
    },
    async openModal() {
        let modal = await this.$ionic.modalController.create({
          component: SimpleModal,
          componentProps: {  }
        });
        // show the modal
        await modal.present();
        // wait to see if i get a response
        let {
          data: { success, noteInfo }
        } = await modal.onDidDismiss();
      },
    updatePage(event){
      this.loading=true
      this.loadmoreQuotes(this.paginationDetails.currentLoaded)
      .then(() => {
        this.chunk()
        this.loading=false
      })
      if (!this.loading) {
        event.target.complete();
      }
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
    this.loading=true
    this.loadmoreQuotes(this.paginationDetails.currentLoaded)
    .then(() => {
      this.chunk()
      this.loading=false
    })
  }
}
</script>
