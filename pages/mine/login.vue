<template>
	<view class="login">
		
	</view>
</template>

<script>
	import {
		mapGetters,
		mapMutations
	} from 'vuex'
	export default {
		computed: {
			...mapGetters(['bussinessId'])
		},
		data(){
			return{
				
			}
		},
		methods:{
			...mapMutations(['setStateValue'])
		},
		created() {
			
		}
	}
</script>

<style lang="scss" scoped>
	.login{
		
	}
</style>
