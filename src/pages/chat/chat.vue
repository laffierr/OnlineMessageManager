<template>
    <view>
        <top-bar>
            <template v-slot:left>
                <view class="topbar-left">
                    <navigator open-type="navigateBack" delta="1" animation-type="pop-out" animation-duration="300" class="iconfont icon-arrow-left-bold"></navigator>
                </view>
            </template>
            <template v-slot:center>
                <view class="topbar-center">
                    <span>woSun</span>
                </view>
            </template>
            <template v-slot:right>
                <view class="topbar-right">
                    <i class="iconfont icon-elipsis"></i>
                </view>
            </template>
        </top-bar>
    </view>

    <scroll-view  class="main" scroll-y="true" scroll-with-animation="true" :scroll-into-view="scrollTo">
        <view class="messages" :style="{paddingBottom:inputh+'px'}">
            <view class="message" v-for="(item,index) in messages" :key="index" :id="'msg' + item.tip">
                <view class="messageTime" v-if="item.time">{{ item.time }}</view>
                <!-- <view class="messageTime">{{ item.time }}</view> -->
                <view class="chat chatL" v-if="item.id == 1">
                    <img class="head" :src="item.imgurl" alt="对方头像">
                    <view class="content" v-if="item.types == 0">
                    <!-- <view class="info">
                            <view class="userName">woSun</view>
                            <view class="time">date</view>
                        </view> -->
                        <p class="words" v-if="item.types == 0">{{ item.message }}</p>
                    </view>
                    <view class="content" v-if="item.types == 1">
                        <img :src="item.message" mode="widthFix"/> 
                        <!-- widthFix 宽度随高度等比例变化 -->
                    </view>
                </view>
                <view class="chat chatR" v-if="item.id == 0">
                    <img class="head" :src="item.imgurl" alt="己方头像">
                    <view class="content" v-if="item.types == 0">
                        <p class="words" v-if="item.types == 0">{{ item.message }}</p>
                    </view>
                    <view class="content" v-if="item.types == 1">
                        <img :src="item.message" mode="widthFix"/> 
                    </view>
                </view>
            </view>
        </view>
        <view class="padbt"></view>
    </scroll-view>

    <submit @inputs = "inputs" @heights="heights"/>
</template>

<script>
import { ScrollView } from "@dcloudio/uni-h5";
import TopBar from "../../components/TopBar.vue";
import datas from '../../commons/js/datas.js';
import { getDate, component} from '../../commons/js/myFun.js';
import submit from '../../components/submit.vue';
import axios from 'axios';
import { nextTick } from 'vue';

    export default {
        components: {
            TopBar,
            ScrollView,
            submit,
        },
        data() {
            return {
                messages: [],
                oldTime: new Date(),
                scrollTo: '',
                inputh: '56',
                // datas: [],
            }
        },
        created() {
            this.getMsg();
            // this.sendRequest();
        },
        methods: {
            // 获取聊天数据
            getMsg() {
                let message = datas.message();
                // let message = this.datas.data.message();
                for (let i = 0; i < message.length; i++) {
                    message[i].imgurl = `../../static/test_imgs/${message[i].imgurl}`;
                    // message[i].imgurl = `../../static/test_imgs/` + message[i].imgurl;

                    let t = this.compareTime(this.oldTime, message[i].time);

                    if(t) {
                        this.oldTime = getDate(new Date(t));
                        message[i].time = getDate(new Date(t));
                        // this.oldTime = t;
                    } else {
                        message[i].time = t;
                    }
                    
                    // 当消息为图片
                    if (message[i].types == 1) {
                        message[i].message = `../../static/test_imgs/${message[i].message}`;
                    }
                    this.messages.unshift(message[i]);
                }
                this.$nextTick(function() {
                    this.scrollTo = 'msg' + this.messages[this.messages.length - 1].tip;
                    // console.log(this.scrollTo);
                })
            },
            // 比较本条消息和上条的时间戳，如果时间差小于五分钟则不显示本条消息的时间
            compareTime(old,now) {
                old = new Date(old);
                now = new Date(now);

                let transO = old.getTime();
                let transN = now.getTime();
                if (transO - transN > 300000) {
                    // this.messages[0].time = null;
                    return now;
                } else {
                    return '';
                }
            },
            // 滚动到底部
            scrollToBottom() {
                this.$nextTick(function() {
                    this.scrollTo = 'msg' + this.messages[this.messages.length - 1].tip;
                    console.log(this.scrollTo);
                })
            },
            // 获取输入框的值
            inputs: function (e) {
                console.log('输入框值为' + e);
            },
            // 获取下方高度
            heights: function (e) {
                this.inputh = e;
                this.scrollToBottom();
            },

            // 定义发送请求的函数
            // sendRequest() {
            //     console.log('check');
            //     // 准备发送的数据，如果有的话
            //     const data = { }; // 这里可以放置你要发送的数据，例如：{ key1: value1, key2: value2 }

            //     // 发送 POST 请求
            //     axios.post('http://localhost:63040/file', data)
            //         .then(response => {
            //             // 请求成功，可以在这里处理返回的数据
            //             console.log("请求成功");

            //             this.datas = response.data;
            //             console.log(this.datas.data);
            //             getMsg();
            //         })
            //         .catch(error => {
            //             // 请求失败，可以在这里处理错误信息
            //             console.error("请求失败:", error);
            //         });
            // },
        },

    };
</script >

<style lang="scss">
@import '../../commons/css/topbar.scss';

.main {
    // height: 100%;
    // padding-top: var(--status-bar-height);
    // padding-bottom: var(--status-bar-height);
    margin-top: 116rpx;
    // margin-bottom: 116rpx;

    // .padbt {
    //     height: var(--status-bar-height);
    //     width: 100%;
    // }
    .messages{
        // padding-bottom: 116rpx;
        .message {
            margin-bottom: 20rpx;

            .messageTime {
                text-align: center;
                // margin: 20rpx 0;
                color: #999;
                font-size: 25rpx;
            }
            .chat {
                display: flex;
                // flex-direction: column;
                // margin: 30rpx;

                .head {
                    height: 80rpx;
                    width: 80rpx;
                    border-radius: 15rpx;
                    margin: 0 20rpx 20rpx 20rpx;
                }

                .content {
                    display: flex;
                    flex-direction: column;
                    border-radius: 20rpx;

                    position: relative;

                    .info {
                        display: flex;
                        // margin: 10rpx 0 10rpx 110rpx;

                        .userName {
                            margin: 0 30rpx;
                            font-weight: bold;
                        }
                    }
                    .words {
                        // width: 400rpx;
                        border-radius: 12rpx;
                        padding: 20rpx;
                        margin-top: 20rpx;
                        // overflow: hidden;
                        // text-overflow: ellipsis;

                        // 指定元素应该生成一个或者多个内联框
                        // display: -webkit-box;
                        // 在一个块元素中显示的行数
                        // -webkit-line-clamp: 4;
                        // 指定内联框的排列方向：垂直
                        -webkit-box-orient: vertical;

                        white-space: normal;

                        // 单词换行
                        word-wrap: break-word;

                        // 给文本框添加370rpx的最大宽度
                        max-width: 410rpx;

                        font-size: 30rpx;
                    }

                    img {
                        margin-top: 20rpx;

                        max-width: 300rpx;
                        border-radius: 12rpx;
                    }
                }
            }

            .chatL {
                .content p {
                    background-color: skyblue;
                }
            }
            .chatR {
                flex-direction: row-reverse;
                // .info {
                //     margin: 10rpx 110rpx 10rpx 0;
                //     flex-direction: row-reverse;
                // }
                .content p {
                    background-color: rgb(135, 235, 162);
                }
            }
        }
        
    }
}


</style>