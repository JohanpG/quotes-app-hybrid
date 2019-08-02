<template>
  <div class="ion-page">
    <ion-content class="ion-padding">
      <h1>{{ $t('settingsMainLabel') }}</h1>
      <ion-list>
        <ion-list-header>{{ $t('settingsGeneralLabel') }}</ion-list-header>
        <ion-item>
          <ion-label>{{ $t('language') }}</ion-label>
          <ion-select @ionChange="onChange($event)" v-bind:placeholder="selectedLanguage">
            <ion-select-option value="English" >English</ion-select-option>
            <ion-select-option value="Spanish" >Spanish</ion-select-option>
          </ion-select>
      </ion-item>
     </ion-list>
    </ion-content>
  </div>
</template>
<script>
  import { mapActions, mapState } from 'vuex'
  import i18n from '@/plugins/i18n'
  export default {
    data () {
      return {
        languages: [
            { flag: 'us', language: 'en', title: 'English' },
            { flag: 'es', language: 'es', title: 'Spanish' }
        ]
      }
    },
    methods: {
      ...mapActions([
        'selectLanguage',
      ]),
      changeLocale(locale) {
          i18n.locale = locale;
      },
      onChange($event){
        console.log($event);
        console.log($event.target.value);
        var result = this.languages.filter(obj => { return obj.title === $event.target.value })
        console.log(result);
        i18n.locale = result[0].language;
        this.selectLanguage($event.target.value)
      }
    },
    computed: {
      ...mapState([
        'selectedLanguage'
      ])
    },
  }
</script>
