<template>
	<view class="view-mine">
		<view class="top-back">
			<view style="height: 1px;"></view>
			<view class="mine-info-box">
				<view class="info-logined" v-show="showUserInfoBox">
					<view class="info-logined-row">
						<view class="user-headimg"></view>
						<view class="user-nickname-row">
							<view class="user-nickname">
								太极张三丰
							</view>
							<view class="user-nickname-tag">
								<micon type="renzheng" ></micon> <span style="padding-left: 10upx;">业主认证</span>
							</view>
						</view>
					</view>
				</view>
				<view class="info-unlogined" v-show="!showUserInfoBox">
					<view class="un-login">
						<micon type="unlogin" size="60"></micon><span  style="padding-left: 10upx;">请登录</span>
						 
					</view>
				</view>
			</view>
		</view>
		
		<view class="mine-list">
			<view class="mine-list-panel">
				<view class="list-item-title">我的发布</view>
				<view class="list-item-content">
					<view class="item-title">关于废旧游戏设备处理的通知</view>
					<view class="item-detail">
						<view class="img-main"></view>
						<view class="item-main-box">
							
						
						<view class="item-content">
							废旧游戏设备应该放到二手市场贩卖，能卖多少是多少
						</view>
						<view class="item-any-info">
							
							<view class="man-creator">太极张三丰</view>
							<view class="time-create">2019-08-28</view>
							<view class="num-talkabout">999+</view>
						</view>
						</view>
					</view>
				</view>
				<view class="list-item-content">
					<view class="item-title">关于废旧游戏设备处理的通知</view>
					<view class="item-detail">
						<view class="img-main"></view>
						<view class="item-main-box">
							
						
						<view class="item-content">
							废旧游戏设备应该放到二手市场贩卖，能卖多少是多少
						</view>
						<view class="item-any-info">
							
							<view class="man-creator">太极张三丰</view>
							<view class="time-create">2019-08-28</view>
							<view class="num-talkabout">999+</view>
						</view>
						</view>
					</view>
				</view>
			</view>
			<view class="mine-list-panel">
				<view class="list-item-title">我的关注</view>
				<view class="list-item-content">
					<view class="item-title">关于废旧游戏设备处理的通知</view>
					<view class="item-detail">
						<view class="img-main"></view>
						<view class="item-main-box">
							
						
						<view class="item-content">
							废旧游戏设备应该放到二手市场贩卖，能卖多少是多少
						</view>
						<view class="item-any-info">
							
							<view class="man-creator">太极张三丰</view>
							<view class="time-create">2019-08-28</view>
							<view class="num-talkabout">999+</view>
						</view>
						</view>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import micon from "@/components/m-icon/m-icon.vue"
	export default {
		components:{
			micon
		},
		computed:{
			showUserInfoBox(){
				return false
			}
		},
		data() {
			return {
				
			};
		},
		created() {
			let a = uni.getSystemInfoSync()
			console.log(a)
		}
	}
</script>

<style lang="scss" scoped>
	.view-mine {
		background-color: #f6f6f6;
		min-height: calc(100vh - var(--status-bar-height) - var(--window-bottom) - var(--window-top));

		.top-back {
			// border:#0A98D5 solid 1px;
			background-image: url('/static/websize/mine-top.png');
			background-repeat: no-repeat;
			background-size: 100% 350upx;
			background-position:top;
		
			.mine-info-box {
				// border:#0A98D5 solid 1px;
				background-color: #FFFFFF;
				border-radius: 20upx;
				width: 650upx;
				height: 300upx;;
				margin:150upx auto;
				
				box-shadow: 6px 10px 20px #333333;
			
				.info-logined {
					padding-top: 25upx;
			
					.info-logined-row {
						display: flex;
						align-items: center;
			
						.user-headimg {
							background-image: url('/static/headimgs/default.png');
							background-repeat: no-repeat;
							background-size: 100% 100%;
							background-position: center;
							height: 300upx;
							width: 300upx;
							border-radius: 50%;
						}
			
						.user-nickname-row {
							flex: 1;
							padding-left: 30upx;
			
							.user-nickname {
								font-size: 40upx;
								color: #888888;
							}
			
							.user-nickname-tag {
								padding-top: 15upx;
								font-size: 20upx;
								color: #0A98D5;
							}
						}
			
					}
				}
			
				.info-unlogined {
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
			
					.un-login {
						padding-left: 150upx;
						font-size: 60upx;
						color: #8A6DE9;
					}
				}
			}
		}

		

		.mine-list {
			margin-top: -100upx;
			padding:20upx;
			
			.mine-list-panel {
				margin-top:20upx;
				.list-item-title {
					height: 80upx;
					line-height: 80upx;
					font-size: 48upx;
					font-weight: bold;
				}

				.list-item-content {
					
					padding:30upx;
					margin-top:15upx;
					border-radius: 20upx;
					background-color:#FFFFFF;
					.item-title {
						font-size: 36upx;
						font-weight: bold;
					}

					.item-detail {
						display:flex;
						padding-top:20upx;
						
						.img-main {
							background-image: url('/static/websize/mine-top.png');
							background-repeat: no-repeat;
							background-size: 100% 100%;
							background-position:center;
							width: 150upx;
							height: 150upx;
						}
						.item-main-box{
							padding-left:20upx;
							.item-content{
								font-size:16upx;
								color:#666666;
							}
							.item-any-info{
								padding-top: 10upx;
								display:flex;
								font-size:14upx;
								color:#999999;
								.man-creator {
									
								}
								
								.time-create {
									flex:1;
									text-align: center;
								}
								
								.num-talkabout {
									
								}
							}
						}
						
					}
				}
			}
		}

	}
</style>
