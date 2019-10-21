// Vendors
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

// Styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Fonts
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faCoffee, faSpinner, faEdit, faCircle, faCheck,
  faPlus, faEquals, faArrowRight, faPencilAlt, faComment
} from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
Vue.config.productionTip = false

library.add(
  faCoffee, faSpinner, faEdit, faCircle, faCheck,
  faPlus, faEquals, faArrowRight, faPencilAlt, faComment, fas);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
}).$mount('#app')
