<template>
<div class="ion-page">
  <ion-item slot="end" @click="openModal" color="light">
    <ion-icon name="funnel"></ion-icon>
    <ion-label>{{ $t('filterButtonLabel') }}</ion-label>
  </ion-item>

  <ion-content
    :scrollEvents="true">
    <div class="spin" v-if="loading">
        <ion-spinner name="crescent"></ion-spinner>
    </div>
    <ion-grid>
        <ion-row v-if="false">
          <ion-col size="8" size-md>
            <ion-item>
            </ion-item>
          </ion-col>
          <ion-col size="4" size-md @click="openModal">
            <ion-item>
              <ion-icon name="funnel"></ion-icon>
              <ion-label>{{ $t('filterButtonLabel') }}</ion-label>
            </ion-item>
          </ion-col>
      </ion-row>

      <ion-row>
        <ion-col size="12" size-md>
          <ion-list  >
              <ion-list-header>
                <h1>{{ $t('quotes') }}</h1>
              </ion-list-header>

              <ion-item v-for='(currentQuote, groupIndex) in allQuotes' :key="groupIndex" @click="redirectToId(currentQuote._id)">
                <ion-avatar slot="start">
                  <img :src="`${baseUrl}${currentQuote.author}.jpg`"  onerror="this.src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'"   :id="currentQuote._id" />
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
        <ion-infinite-scroll-content>
          <ion-spinner name="crescent" v-if="loading"></ion-spinner>
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
  </ion-content>
</div>
</template>

<script>
import ModalFilters from "@/components/modals/ModalFilters.vue";
import Popover from "@/components/popovers/Popover.vue";
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      loading: true,
      groupedItems: [],
      componentKey: 0,
      sortby:"Newest",
      selectedAuthor:"",
      baseUrl: process.env.BASE_URL,
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
    async openModal() {
        let modal = await this.$ionic.modalController.create({
          component: ModalFilters,
          componentProps: {
            propsData: {
              sortBy: this.sortby,
              author: this.selectedAuthor
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
          this.loadmoreQuotes(payload)
          .then(() => {
            this.loading=false
          })
        }
      },
      async openPopover(ev) {
          let popover = await this.$ionic.popoverController.create({
            component: Popover,
            event: ev,
            translucent: true
          });
          // show the modal
          await popover.present();
        },
    loadImage(quote){
      console.log("entroo");
      console.log(quote);

      document.getElementById(quote._id).src = this.baseUrl+'/NoAuthor.jpg';

    },
    updatePage(event){
      this.loading=true
      const payload = {
        current: this.paginationDetails.currentLoaded,
        sortby: this.sortby

      }
      this.loadmoreQuotes(payload)
      .then(() => {
        this.loading=false
      })
      event.target.complete();
    },
    redirectToId (quoteId) {
       this.$router.push(
          {
            path: '/quotes/' + quoteId
          })
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
    if(this.allQuotes.length <1)
    {
      this.loading=true
      const payload = {
        current: this.paginationDetails.currentLoaded,
        sortby: this.sortby

      }
      this.loadmoreQuotes(payload)
      .then(() => {
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
