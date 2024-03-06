<template>
    <view>
        <top-bar>
            <template v-slot:left>
                <view class="topbar-left">
                    <i class="iconfont icon-arrow-left-bold"></i>
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

    <ScrollView scroll-y="true" scroll-with-animation="true" class="main">
        <view class="messages">
            <view class="message">
                <view class="messageTime">18:45</view>
                <view class="chat chatL">
                    <img src="../../static/test_imgs/5.jpg" alt="对方头像">
                    <view class="content">
                        <!-- <view class="info">
                            <view class="userName">woSun</view>
                            <view class="time">date</view>
                        </view> -->
                        <p class="words">中文测试试</p>
                    </view>
                </view>
            </view>

            <view class="message">
                <view class="messageTime">18:45</view>
                <view class="chat chatR">
                    <img src="../../static/test_imgs/7.jpg" alt="对方头像">
                    <view class="content">
                        <p class="words">中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试</p>
                    </view>
                </view>
            </view>
        </view>
    </ScrollView>

</template>

<script>
    import { ScrollView } from "@dcloudio/uni-h5";
import TopBar from "../../components/TopBar.vue";


    export default {
        components: {
    TopBar,
    ScrollView
},
        setup() {
            // const components = {
            //     TopBar,
            // };
            return {
                
            };
        },
    };
</script >

<style lang="scss">
@import '../../commons/css/topbar.scss';

.main {
    padding-top: var(--status-bar-height);
    margin-top: 116rpx;
    .messages{
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

                img {
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
                }
            }

            .chatL {
                .content p {
                    background-color: skyblue;
                }
            }
            .chatR {
                float: right;
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