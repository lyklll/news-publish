import Vue from 'vue'
import App from './App'
// import config from'./config/index.js'
import store from '@/common/store'
Vue.config.productionTip = false
//Vue.prototype.$config = config
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()

export default app