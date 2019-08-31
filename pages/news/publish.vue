<template>
	<view class="page">
		<view class="feedback-body">
			<textarea placeholder="请输入..."   v-model="sendDate.content" class="feedback-textare txt-content" />
			</view>
        <choose :count="count"  :imgList="imgList"  @changes="fileChange"></choose>
        <compress  ref="compress" :maxwh="maxwh" :quality="quality" > </compress>


        <view class="swiper-list">
            <view class="uni-list-cell uni-list-cell-pd feedback-title">
                <view class="uni-list-cell-db ">选择分类：</view>
				<picker  :range="typeList" :value="typeindex" @change="bindPickerChange">
					<view class="item-type">{{typeList[typeindex]}}</view>
				</picker>
            </view>
        </view>
		<view class="swiper-list">
		    <view class="uni-list-cell uni-list-cell-pd feedback-title">
		        <view class="uni-list-cell-db ">允许评论：</view>
				 <switch :checked="isAllowe" @change="changeIsAlloweDots()" />
		    </view>
		</view>
		<view class="swiper-list">
		    <view class="uni-list-cell uni-list-cell-pd feedback-title">
		        <view class="uni-list-cell-db ">匿名发布：</view>
				 <switch :checked="isNiming" @change="changeIsNimingDots()" />
		    </view>
		</view>
        <!-- <view class='feedback-title'>
            <text>QQ/邮箱</text>
        </view>
        <view class="feedback-body">
            <input class="feedback-input" v-model="sendDate.contact" placeholder="(选填,方便我们联系你 )" />
        </view>
        <view class='feedback-title feedback-star-view'>
            <text>插件评分</text>
            <view class="feedback-star-view">
                <text class="feedback-star" v-for="(value,key) in stars" :key="key" :class="key < sendDate.score ? 'active' : ''" @tap="chooseStar(value)"></text>
            </view>
        </view> -->
        <button type="primary" class="feedback-submit" @tap="send">提交</button>

    </view>
</template>

<script>
    import choose from "../../components/template/image/choose.vue"
    import compress from "../../components/template/image/compress.vue"
    export default {
        name:'newsPublish',
        components:{
        	choose,
            compress
        },
        data() {
            return {
                isYasuo:false,
                count:10,
                maxwh:280,
                quality:0.5, 
				typeList:['话题','农产品','闲置','活动'],
                typeindex: 0,
                imgList: [],
                sendDate: {
                    score: 0,
                    content: "",
                    contact: ""
                },
				isNiming:false,
				isAllowe:true,
            }
        },
        onLoad() {

        },
        methods: {
			 bindPickerChange: function(e) {
			            console.log('picker发送选择改变，携带值为', e.target.value)
			            this.typeindex = e.target.value
			        },
            compressImg(e){
              console.log(e)  
            },
            changeIsNimingDots(e){
				this.isNiming = !this.isNiming
            },
			changeIsAlloweDots(e){
				this.isAllowe = !this.isAllowe
			},
            fileChange(e){
              this.imgList=e;
                  //             YCImg.canvasToBase64(e)
                  // .then(e => {
                  //     // console.log(JSON.stringify(e))
                  //     this.value = e;
                  //     this.confirm();
                  //     // console.log(e)
                  // })
                  // .catch(e => {
                  //     uni.showToast({
                  //         title: '失败！' + e.message,
                  //         icon: 'none',
                  //         duration: 1000
                  //     });
                  // })
            },
            chooseStar(e) { //点击评星
                this.sendDate.score = e;
            },
            previewImage() { //预览图片
                uni.previewImage({
                    urls: this.imgList
                });
            },
            send() { //发送提交
                // console.log(JSON.stringify(this.sendDate));
                
                function requst(imgs,data){
                    console.log(JSON.stringify(imgs));
                                    uni.uploadFile({
                        url: "https://service.dcloud.net.cn/feedback",
                        files: imgs,
                        formData: data,
                        success: (res) => {
                            if (res.statusCode === 200) {
                                uni.showToast({
                                    title: "反馈成功!"
                                });
                                this.imgList = [];
                                this.sendDate = {
                                    score: 0,
                                    content: "",
                                    contact: ""
                                }
                            }
                        },
                        fail: (res) => {
                            // console.log(res)
                        }
                    });
                }
                
                if(this.isYasuo){

                    this.$refs.compress.yasuoImg(this.imgList).then(e=>{
                        // console.log([this.imgList,e])
                        let imgs = e.map((value, index) => {
                            //var base64= value.tempFilePath
                            return {
                                name: "image" + index,
                                uri:value.path,
                                base64:value.tempFilePath
                                
                            }
                        })
                         console.log(imgs)
                         console.log(this.sendDate)
                        //requst(imgs,this.sendDate)
                    })
                }else{
                    
                    let imgs = this.imgList.map((value, index) => {
                        return {
                            name: "image" + index,
                            uri:value.path,
                            base64:value.tempFilePath
                        }
                    })
					console.log(imgs)
					console.log(this.sendDate)
                    //requst(imgs,this.sendDate)
                }
            }
        }
    }
</script>

<style scoped>
    page {
        background-color: #EFEFF4;
    }
	.txt-content{
		border-bottom:1px solid #F1F1F3;
		height: 320upx;;
	}
    .input-view {
        font-size: 28upx;
    }
    .close-view{
        text-align: center;line-height:14px;height: 16px;width: 16px;border-radius: 50%;background: #FF5053;color: #FFFFFF;position: absolute;top: -6px;right: -4px;font-size: 12px;
    }
	.item-type{
		text-decoration:underline ;
		font-size: 36upx;
		color: #6699FF;
	}
</style>
