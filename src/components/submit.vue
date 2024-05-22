<template>
    <view>
        <view class="submit">
            <view class="sub-chat">
                <textarea auto-height="true" class="texta" @input="inputs" v-model="msg" @focus="focus"></textarea>
                <view class="bt" @tap="emoji">
                    <i class="iconfont icon-favorite"></i>
                </view>
                <view class="bt" @tap="sendImg('album')">
                <!-- <view class="bt" @tap="sendImg('camera')"> -->
                    <i class="iconfont icon-picture"></i>
                </view>
            </view>
            <view class="emoji" :class="{displaynone:!isemoji}">
                <view class="emoji-send">
                    <view class="emoji-send-btn-delete" @tap="deleteEmoji">👋</view>
                    <view class="emoji-send-btn-item" @tap="sendEmoji">✍</view>

                </view>
                <emoji @chooseEmoji="chooseEmoji" :height="230"></emoji>
            </view>
            <!-- <view class="pic" :class="{displaynone:!ispic}">
                
            </view> -->
        </view>
    </view>
</template>

<script>
import { nextTick } from 'vue';
import emoji from './emoji.vue';

export default {
    name: 'Submit',
    data() {
        return {
            isemoji: false,
            // ispic: true,
            msg: '',
        };
    },
    components: {
        emoji,
        // pic,
    },
    methods: {
        // 获得框高度
        getHeight:function () {
            const query = uni.createSelectorQuery().in(this);
            query.select('.submit').boundingClientRect(data => {
                this.$emit('heights', data.height);
            }).exec();
        },
        // 发送
        // 发送时附带消息类型
        send:function (msg,type){
            let data = {
                message : msg,
                type : type,
            }
            console.log(this.msg);
            this.$emit('inputs',data);
                // 把逻辑推迟到同步任务执行完毕 用nextTick实现函数放入异步
                nextTick(() => {
                    this.msg = '';
                });
        },
        // 发送文本
        inputs:function (e) {
            var chatm = e.detail.value;
            var post = chatm.indexOf('\n'); // 回车
            if (post != -1 && chatm.length > 0) {
                chatm = chatm.replace(/\n/g, '');
                // 因为每个里面都有回车了 所以要清空
                this.send(this.msg,0)
                // 类型0代表文字
            }
            this.msg = e.detail.value;
        },
        // 重新聚焦到输入框
        focus:function () {
            this.isemoji = false;
            nextTick(() => {
                this.getHeight();
            });
        },
        // 表情
        emoji:function () {
            this.isemoji = !this.isemoji;
            msg: '';
            // 打开拓展框后动态获取高度
            nextTick(() => {
                this.getHeight();
            });
        },
        // 选择表情
        chooseEmoji:function (item) {
            // console.log(item);
            this.msg += item;
        },
        // 发送表情
        sendEmoji:function(){
            if (this.msg.length > 0) {
                this.send(this.msg,0)
                // 类型0代表文字
            }
        },
        // 删除表情
        deleteEmoji:function(){
            if (this.msg.length > 0) {
                this.msg = this.msg.substring(0, this.msg.length - 1);

            }
        },
        // 发送图片
        sendImg:function(e) {
            let count = 9;
            if (e == 'album') {
                count = 9;
            } else {
                count = 1;
            }
            uni.chooseImage({
                count:count,
                sizeType:['original','compressed'], // 原图/压缩过的
                sourceType: [e],
                success: (res) => {
                    const filePaths = res.tempFilePaths;
                    // console.log(JSON.stringify(res.tempFilePaths));
                    for (let i = 0; i < filePaths.length; i++) {
                        this.send(filePaths[i],1) // 类型1代表图片
                    }
                }
            });
        },

    },
    mounted() {
        // Your component's mounted hook goes here
    },
    // Your component's other lifecycle hooks go here
};
</script>

<style lang="scss">
    .submit {
        background: #f3f3f3;
        border-top: 1rpx solid #f0f0f0;
        width: 100%;
        position: fixed;
        bottom: 0;
        z-index: 100;
        // padding-bottom: var(--status-bar-height);
        padding-bottom: env(safe-area-inset-bottom);
        .sub-chat {
            width: 100%;
            display: flex;
            align-items: flex-end;
            box-sizing: border-box;
            padding: 15rpx 0 15rpx 20rpx;
            // padding: 15rpx 15rpx;
            .texta {
                flex: auto;
                width: 76%;
                // height: 60rpx;
                border: none;
                border-radius: 10rpx;
                background: #ffffff;
                max-height: 170rpx;
                padding: 10rpx 20rpx;
                overflow: hidden;
            }
            .bt {
                flex: auto;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 12%;
                // height: 100%;
                i {
                    margin: 10rpx;
                    font-size: 40rpx;
                }
            }
        }
        .displaynone {
            display: none;
        }
        .emoji {
            width: 100%;
            height: 450rpx;
            background: #f3f3f3;
            // position: absolute;
            // bottom: 0;
            // left: 0;
            // z-index: 100;
            box-shadow: 0px -1px 0px 0px rgba(0,0,0,0.1);
            .emoji-send {
                width: 280rpx;
                height: 104rpx;
                padding-top: 24rpx;
                background-color: rgba(236,237,238,0.8);
                position: fixed;
                bottom: env(safe-area-inset-bottom);
                // bottom: var(--status-bar-height);
                // padding-bottom: var(--status-bar-height);
                right: 0;
                display: flex;
                .emoji-send-btn-item {
                    flex: 1;
                    margin: 0 32rpx 0 20rpx;
                    height: 80rpx;
                    background-color: rgba(255,228,49,1);
                    font-size: 32rpx;
                    text-align: center;
                    line-height: 80rpx;
                    border-radius: 12rpx;
                }
                .emoji-send-btn-delete {
                    flex: 1;
                    // margin: 0 32rpx 0 20rpx;
                    margin-left: 24rpx;
                    height: 80rpx;
                    background-color: rgba(255,228,49,1);
                    font-size: 32rpx;
                    text-align: center;
                    line-height: 80rpx;
                    border-radius: 12rpx;
                }
            }
        }
        .pic {
            width: 100%;
            height: 450rpx;
            background: rgba(236,237,238,1);
            box-shadow: 0rpx -1rpx 0rpx 0rpx rgba(0,0,0,0.1);
            bottom:env(safe-area-inset-bottom)
        }
    }
</style>