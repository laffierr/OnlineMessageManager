<template>
    <view>
        <top-bar>
            <template v-slot:left>
                <view class="topbar-left">
                    <!-- <image src="../../static/test_imgs/1.jpg"></image> -->
                    <!-- <i class="iconfont icon-arrow-left-bold"></i> -->
                    <navigator open-type="navigateBack" delta="1" animation-type="pop-out" animation-duration="300" class="iconfont icon-arrow-left-bold"></navigator>
                </view>
            </template>
            <template v-slot:right>
                <view class="topbar-right">
                    <!-- <image src="../../static/test_imgs/2.jpg"></image> -->
                    <!-- <view class="topbar-signin">注册</view> -->
                    <i class="iconfont icon-elipsis"></i>
                </view>
            </template>
        </top-bar>

        <view class="main">
            <view class="infos">
                <view class="info">
                    <view class="title">昵称</view>
                    <input class="content" type="text" placeholder="用户名">
                    <view class="change">
                        <i class="iconfont icon-arrow-right-bold"></i>
                    </view>
                </view>
                <view class="info head">
                    <view class="title">头像</view>
                    <view class="content">
                        <!-- <img :src="../../static/test_imgs/10.jpg" mode="widthFix" alt="用户头像" @click="select"/> -->
                        <img :src="path" mode="widthFix" alt="用户头像" @click="select"/>
	                    <ksp-cropper mode="free" :width="200" :height="140" :maxWidth="1024" :maxHeight="1024" :url="url" @cancel="oncancel" @ok="onok"></ksp-cropper>
                    </view>
                    <view class="change">
                        <i class="iconfont icon-arrow-right-bold"></i>
                    </view>
                </view>
                <view class="info">
                    <view class="title">邮箱</view>
                    <view class="content">
                        youxiang@xxx.com
                    </view>
                    <view class="change">
                        <i class="iconfont icon-arrow-right-bold"></i>
                    </view>
                </view>
                <view class="info">
                    <view class="title">密码</view>
                    <input class="content" type="password" placeholder="youxiang@xxx.com">
                    <view class="change">
                        <i class="iconfont icon-arrow-right-bold"></i>
                    </view>
                </view>
            </view>
        </view>


    </view>
</template>

<script>
import { View } from '@dcloudio/uni-h5';
import TopBar from '../../components/TopBar.vue';
import { ref } from 'vue';

export default {
    // data() {
    //     return {
    //         url: "",
    //         path: ""
    //     }
    // },
    components: {
        TopBar,
        View
    },
    data() {
        return {
            url: '',
            path: '',
        }
    },
    methods: {
        select(){
            uni.chooseImage({
                count:1, //默认是9
                sourceType:['album','carema'],
                success: (rst) => {
                    // 设置url的值，显示控件
                    this.url = rst.tempFilePaths[0];
                }
            });
        },

        onok(ev){
            this.url = "";
            this.path = ev.path;
        },

        oncancel(){
            // url设置为空，隐藏控件
            this.url = "";
        },
    },
    onLoad() {
        uni.setNavigationBarTitle({
            title: '用户信息',
        });
    },
    // methods: {
    //     select() {
    //         uni.chooseImage({
    //             count:1, //默认是9
    //             sourceType:['album','carema'],
    //             success: (rst) => {
    //                 // 设置url的值，显示控件
    //                 this.url = rst.tempFilePaths[0];
    //             }
    //         });
    //     },
    //     onok(ev) {
    //         this.url = "";
    //         this.path = ev.path;
    //     },
    //     oncancel() {
    //         // url设置为空，隐藏控件
    //         this.url = "";
    //     }
    // }
}
</script>

<style lang="scss">
    @import '../../commons/css/topbar.scss';

    .main {
        padding-top: var(--status-bar-height);
        padding-top: 112rpx;

        display: flex;
        flex-direction: column;
    }
    
    .info {
        display: flex;
        height: 96rpx;
        padding: 12rpx $uni-spacing-col-base;
        align-items: center;

        .title {
            flex: none;
            float: left;
            margin-left: 20rpx;
            font-size: $uni-font-size-lg;
            color: $uni-text-color;
            line-height: 112rpx;
        }

        .content {
            flex: 1;
            display: flex;
            margin-left: $uni-spacing-col-lg;
            font-size: $uni-font-size-lg;
            color: $uni-text-color-grey;
            line-height: 112rpx;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            img {
                width: 120rpx;
                height: 120rpx;
                border-radius: $uni-border-radius-base;
                margin: auto 0;
            }
        }


        .change {
            // float: right;
            flex: none;
            font-size:  $uni-font-size-lg;
        }

    }

            
    .head {
        height: 148rpx;
    }
</style>
