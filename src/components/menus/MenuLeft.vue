<template>
  <ion-menu side="start">
    <ion-header>
      <ion-toolbar color="translucent">
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item @click="navigate('/')">
          <ion-icon name="home" slot="start"></ion-icon>
          <ion-label>{{ $t('home') }}</ion-label>
        </ion-item>
        <ion-item @click="navigate('/quotesList')" v-if="false" >
          <ion-icon name="person" slot="start"></ion-icon>
          <ion-label>{{ $t('profile') }}</ion-label>
        </ion-item>
        <ion-item @click="navigate('/quotesList')" v-if="true" >
          <ion-icon name="text" slot="start"></ion-icon>
          <ion-label>{{ $t('quotesList') }}</ion-label>
        </ion-item>
        <ion-item @click="navigate('/newQuote')">
          <ion-icon name="add-circle" slot="start"></ion-icon>
          <ion-label>{{ $t('newQuote') }}</ion-label>
        </ion-item>
        <ion-item @click="navigate('/quotes')">
          <ion-icon name="chatbubbles" slot="start"></ion-icon>
          <ion-label>{{ $t('quotes') }}</ion-label>
        </ion-item>
        <ion-item @click="navigate('/settings')">
          <ion-icon name="settings" slot="start"></ion-icon>
          <ion-label>{{ $t('settingsMainLabel') }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>
<script>
  export default {
    name: 'MenuLeft',
    methods: {
      openStart () {
        document.querySelector('ion-menu-controller').open('start')
      },
      closeStart () {
        document.querySelector('ion-menu-controller').close('start')
      },
      navigate: function(route) {
        this.$router.push(route);
        this.closeStart();
      },
    }
  }
</script>
