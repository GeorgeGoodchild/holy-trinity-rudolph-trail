import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

var app = new Vue({
  router,
  render: h => h(App),
  created () {
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect
      delete sessionStorage.redirect
      this.$router.push(redirect)
    }
  }
})

app.$mount('#app')
