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
            v-bind:placeholder="$t('authorNameEmpty')"
            :value="formData.author"
            @input="formData.author = $event.target.value"
             required type="text" ></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">{{ $t('to') }}<ion-text color="danger">*</ion-text></ion-label>
            <ion-input
            v-bind:placeholder="$t('toEmpty')"
            :value="formData.to"
            @input="formData.to = $event.target.value"
             required type="text"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">{{ $t('quote') }}<ion-text color="danger">*</ion-text></ion-label>
            <ion-input
            v-bind:placeholder="$t('quoteEmpty')"
            :value="formData.quote"
            @input="formData.quote = $event.target.value"
            required type="text" ></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">{{ $t('quoteDate') }}<ion-text color="danger">*</ion-text></ion-label>
            <ion-input
            :value="formData.date"
            @input="formData.date = $event.target.value"
            required type="date" ></ion-input>
          </ion-item>

        </ion-list>

        <div class="ion-padding">
          <ion-button expand="block" type="submit" class="ion-no-margin">{{ $t('submit') }}</ion-button>
        </div>
      </form>
    </ion-content>
    <ion-alert-controller></ion-alert-controller>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n'
import { mapActions, mapGetters } from 'vuex'

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
    handleSubmit(event) {
      console.log(event);
      event.preventDefault();
      const { author, to, quote, date } = this.formData
      const payload = {
        author,
        to,
        quote,
        date
      }
      console.log(payload);
      if (payload) {
        this.addQuote(payload)
        .then(() => {
          this.showAlert();
        })
      }

    },
    showAlert() {
      return this.$ionic.alertController
        .create({
          header: i18n.tc('success'),
          message: i18n.tc('successMessage'),
          buttons: ["OK"]
        })
        .then(a => a.present());
      }

  },
  created: function () {
  }
}
</script>
