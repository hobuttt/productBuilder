import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuelidate from 'vuelidate'
import VueI18n from 'vue-i18n'
import Language from './../../common/i18n/Language'

Vue.use(VueI18n)
Vue.use(Vuetify)
Vue.use(Vuelidate)
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages: Language
})
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
