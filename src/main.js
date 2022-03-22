import Vue from 'vue'
import App from './App.vue'

// aggiunto bootstrap
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

// aggiunto font-awesome 
import { library } from '@fortawesome/fontawesome-svg-core'

// Icone

import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faFacebookF } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter } from '@fortawesome/free-solid-svg-icons'
// import { faLinkedinIn } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'





import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faClock, faPhone, faEnvelope, faUser)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
