import Vue from 'vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import '@/utils/rules'

Vue.component('v-prov', ValidationProvider)
Vue.component('v-obs', ValidationObserver)
