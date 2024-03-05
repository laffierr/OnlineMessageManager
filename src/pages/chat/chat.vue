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
        <view class="chats">
            <view class="chat chatL">
                <view class="info">
                    <view class="userName">woSun</view>
                    <view class="time">date</view>
                </view>
                <view class="content">
                    <view class="imgBg">
                        <img src="../../static/test_imgs/5.jpg" alt="对方头像">
                    </view>
                    <p class="message">中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试</p>
                </view>
            </view>
            <!-- <view class="chat chatR">
                <img src="../../static/test_imgs/7.jpg" alt="本人头像">
                <view class="content">
                    <view class="info">
                        <view class="userName">wo</view>
                        <view class="time">date</view>
                    </view>
                    <view class="message">m2mmmmmmmmmmmm2m</view>
                </view>
            </view> -->
            <view class="chat chatR">
                <view class="info">
                    <view class="userName">wo</view>
                    <view class="time">date</view>
                </view>
                <view class="content">
                    <view class="imgBg">
                        <img src="../../static/test_imgs/7.jpg" alt="对方头像">
                    </view>
                    <p class="message">中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试中文测试</p>
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
    .chats{
        .chat {
            display: flex;
            flex-direction: column;
            margin: 30rpx;

            width: 500rpx;

            .info {
                display: flex;
                // margin: 10rpx 0 10rpx 110rpx;

                .userName {
                    margin: 0 30rpx;
                    font-weight: bold;
                }
            }

            .content {
                display: flex;
                flex-direction: column;
                border-radius: 20rpx;

                position: relative;
                .imgBg {
                    position: absolute;
                    height: 140rpx;
                    width: 140rpx;
                    // left: -20rpx;
                    // top: -77rpx;

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    background-color: rgb(241, 241, 241);
                    border-radius: 24rpx;

                    shape-outside: polygon(0rpx 0rpx,0rpx 200rpx,200rpx 200rpx);

                    img {
                        height: 120rpx;
                        width: 120rpx;
                        border-radius: 20rpx;
                    }
                }
                .message {
                    // width: 400rpx;
                    border-radius: 12rpx;
                    padding: 20rpx;
                    // overflow: hidden;
                    // text-overflow: ellipsis;

                    // 指定元素应该生成一个或者多个内联框
                    display: -webkit-box;
                    // 在一个块元素中显示的行数
                    // -webkit-line-clamp: 4;
                    // 指定内联框的排列方向：垂直
                    -webkit-box-orient: vertical;

                    white-space: normal;

                    // 单词换行
                    word-wrap: break-word;
                }
            }
        }

        .chatL {
            .info {
                margin: 10rpx 0 10rpx 110rpx;
            }
            .content {
                background-color: skyblue;
                .imgBg {
                    top: -77rpx;
                    left: -20rpx;
                }
            }
            .message {
                // margin-left: 30rpx;
            }
        }
        .chatR {
            float: right;
            .info {
                margin: 10rpx 110rpx 10rpx 0;
                flex-direction: row-reverse;
            }
            .content {
                background-color: rgb(135, 235, 162);
                .imgBg {
                    top: -77rpx;
                    right: -20rpx;
                }
            }
            .message {
                // margin-right: 30rpx;
            }
        }
    }
}


</style>