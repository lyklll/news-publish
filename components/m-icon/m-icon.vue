<template>
	<view class="m-icon" :class="['m-icon-'+type]" :style="{color:color,'font-size':fontSize}" @click="onClick()"></view>
</template>

<script>
	export default {
		props: {
			/**
			 * 图标类型
			 */
			type: String,
			/**
			 * 图标颜色
			 */
			color: String,
			/**
			 * 图标大小
			 */
			size: {
				type: [Number, String],
				default: 48
			}
		},
		computed: {
			fontSize() {
				var size = Number(this.size)
				size = isNaN(size) ? 48 : size
				console.log(size)
				size=uni.upx2px(size)
				return `${ size }px`
			}
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style>
	@import "./m-icon.css";
</style>
