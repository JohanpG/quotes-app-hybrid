import Vue from 'vue';
import DailyQuote from './views/DailyQuote.vue'
import Quotes from './views/Quotes.vue'
import QuotesList from './views/QuotesList.vue'
import NewQuote from './views/NewQuote.vue'
import Quote from './views/Quote.vue'
import Home from './views/Home.vue'
import Settings from './views/Settings.vue'
import { IonicVueRouter } from '@ionic/vue';
Vue.use(IonicVueRouter);
export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home

    },
    {
      path: '/dailyQuote',
      name: 'dailyQuote',
      component: DailyQuote
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/newQuote',
      name: 'newQuote',
      component: NewQuote
    },
    {
      path: '/quotes',
      name: 'quotes',
      component: Quotes
    },
    {
      path: '/quotesList',
      name: 'quotesList',
      component: QuotesList
    },
    {
      path: '/quotes/:id',
      name: 'quote',
      component: Quote
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    }
  ]
});
