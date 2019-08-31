import axios from 'axios';
import _this from "@/main"
import store from '@/api/store'

const service = axios.create({
	// process.env.NODE_ENV === 'development' 来判断是否开发环境
	baseURL: '/docapi/',
	timeout: 5000
})
let loading=null
service.interceptors.request.use(config => {
	if (!config.data.tokenCode && store.getters.tokenCode) {
		config.data.tokenCode = store.getters.tokenCode
	}
	if(!config.data.noLoading){
		uni.showLoading({
			mask:true,
			title:"请稍候"
		})
		// loading=_this.$loading({
		// 	lock: true,
		// 	text: '请稍候',
		// 	spinner: 'el-icon-loading',
		// 	background: 'rgba(0, 0, 0, 0.7)'
		// })
	}
	
	return config;
}, error => {
	console.log(error);
	return Promise.reject();
})

service.interceptors.response.use(response => {
	if (response.status === 200) {
		if(loading){
			uni.hideLoading()
		}
		
		if (response.data.issuccess) {
			if (response.data.tokenCode) {
				
				store.commit("setStateValue", {
					"tokenCode": response.data.tokenCode
				})
			}
			return response.data.data
		} else {
			store.commit("setStateValue", {
				"tokenCode": ""
			})
			window.location.href="/"
			//window.open("/")
			//_this.$router.push("/")
		}
	} else {
		Promise.reject();
	}
}, error => {
	console.log(error);
	return Promise.reject();
})

var request = async (url, data) => {
	//_this.$router.push({path:"/dashboard"})
	let result = await service({
		url: url,
		method: 'post',
		data: data
	})
	return result
}

export default request;
