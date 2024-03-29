<template>
    <view>
        <view class="submit">
            <view class="sub-chat">
                <textarea auto-height="true" class="texta" @input="inputs" v-model="msg"></textarea>
                <view class="bt" @tap="emoji">
                    <i class="iconfont icon-favorite"></i>
                </view>
                <view class="bt">
                    <i class="iconfont icon-picture"></i>
                </view>
            </view>
            <view class="emoji" :class="{displaynone:!isemoji}">
            <!-- <view class="emoji" :class="s"> -->
                EMOJI
            </view>
        </view>
    </view>
</template>

<script>
import { nextTick } from 'vue';

export default {
    name: 'Submit',
    data() {
        return {
            isemoji: false,
            msg: '',
        };
    },
    methods: {
        // 发送
        inputs:function (e) {
            var chatm = e.detail.value;
            var post = chatm.indexOf('\n'); // 回车
            if (post != -1 && chatm.length > 0) {
                chatm = chatm.replace(/\n/g, '');
                this.$emit('inputs', this.msg);
                console.log(this.msg);
                // 因为每个里面都有回车了 所以要清空
                // 把逻辑推迟到同步任务执行完毕 用nextTick实现函数放入异步
                nextTick(() => {
                    this.msg = '';
                });
            }
            this.msg = e.detail.value;
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
        // 获得框高度
        getHeight:function () {
            const query = uni.createSelectorQuery().in(this);
            query.select('.submit').boundingClientRect(data => {
                this.$emit('heights', data.height);
            }).exec();
        }

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
        padding-bottom: var(--status-bar-height);
        .sub-chat {
            width: 100%;
            display: flex;
            align-items: flex-end;
            box-sizing: border-box;
            padding: 15rpx 0 15rpx 20rpx;
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
        }
    }
</style>