<template>
    <view>
        <top-bar>
            <template v-slot:left>
                <view class="topbar-left">
                    <!-- <image src="../../static/test_imgs/1.jpg"></image> -->
                    <i class="iconfont icon-arrow-left-bold"></i>
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

        <view class="content">
            <view class="bg">

            </view>
        </view>


    </view>
</template>

<script>
import { View } from '@dcloudio/uni-h5';
import TopBar from '../../components/TopBar.vue';

export default {
    components: {
        TopBar,
        View
    },
    set() {
        const goback= () => {

        }
        const more = () => {
            
        }
    },
    onLoad() {
        uni.setNavigationBarTitle({
            title: '用户信息',
        });
    }
}
</script>

<style lang="scss">
    @import '../../commons/css/topbar.scss';
</style>
