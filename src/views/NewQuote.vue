<template>
  <div class="ion-page">
    <ion-card>
        <ion-card-header>
          <ion-card-title>{{ $t('newQuote') }}</ion-card-title>
          <ion-card-subtitle>{{ $t('newQuoteSubtitle') }} : </ion-card-subtitle>
        </ion-card-header>
    </ion-card>
    <ion-content>
      <form @submit.prevent="handleSubmit">
      <ion-list lines="full" class="ion-no-margin ion-no-padding">
          <ion-item>
            <ion-label position="stacked">{{ $t('authorName') }}<ion-text color="danger">*</ion-text></ion-label>
            <ion-input
            :value="formData.author"
            @input="formData.author = $event.target.value"
             required type="text" ></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">{{ $t('to') }}<ion-text color="danger">*</ion-text></ion-label>
            <ion-input required type="text" v-bind:value="formData.to"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">{{ $t('quote') }}<ion-text color="danger">*</ion-text></ion-label>
            <ion-input required type="text" v-bind:value="formData.quote"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label>MM DD YY</ion-label>
            <ion-datetime displayFormat="MM DD YY" v-bind:placeholder="$t('quoteDateEmpty')" v-bind:value="formData.date"></ion-datetime>
          </ion-item>

        </ion-list>

        <div class="ion-padding">
          <ion-button expand="block" type="submit" class="ion-no-margin">{{ $t('submit') }}</ion-button>
          <ion-button expand="block" type="reset" class="ion-no-margin">{{ $t('reset') }}</ion-button>
        </div>
      </form>
    </ion-content>
    <ion-alert-controller></ion-alert-controller>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
const controller = document.querySelector('ion-alert-controller');

export default {
  name: 'admin',
  data() {
    return {
      formData: {
        author: '',
        to: '',
        quote: '',
        date: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'getAllQuotes'
    ])
  },
  methods: {
    ...mapActions([
      'addQuote'
    ]),
    handleSubmit() {
      event.preventDefault();
      const { author, to, quote, date } = this.formData
      const payload = {
        author,
        to,
        quote,
        date
      }
      console.log(payload);
      // Test for valid zip
      if (payload) {
        //this.addQuote(payload)
        this.showAlert();
      }

    },
    showAlert() {
      return this.$ionic.alertController
        .create({
          header: "created",
          message: "Created sucessfully",
          buttons: ["OK"]
        })
        .then(a => a.present());
      }

  },
  created: function () {
  }
}
</script>
