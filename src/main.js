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
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { faCubes } from '@fortawesome/free-solid-svg-icons'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'














import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faClock, faPhone, faEnvelope, faUser, 
            faFacebookF, faTwitter, faLinkedinIn, 
            faPlay, faSuitcase, faChartSimple,
             faCubes, faPlane, faEarthEurope, faBoxOpen,
             faArrowRight)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
