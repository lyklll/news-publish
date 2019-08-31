import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		tokenCode: null,
		userInfo:null
	},
	getters: {
		tokenCode(state) {
			if (!state.tokenCode) {
				state.tokenCode = JSON.parse(localStorage.getItem('tokenCode'))
			}
			return state.tokenCode
		},
		userInfo(state) {
			if (!state.userInfo) {
				state.userInfo = JSON.parse(localStorage.getItem('userInfo'))
			}
			return state.userInfo
		}
	},
	mutations: {
		setStateValue(state, o) {
			Object.keys(o).forEach((key, i, v) => {
				state[key] = o[key]
				localStorage.setItem(key, JSON.stringify(o[key]))
			})
		}
	},
	actions: {

	}
})
