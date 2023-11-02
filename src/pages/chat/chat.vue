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

    <view class="main">

    </view>

</template>

<script>
    import TopBar from '../../components/Topbar.vue';

    export default {
        setup() {
            const components = {
                TopBar,
            };
            return {
                components,
            };
        },
    };
</script >

<style lang="scss">
@import '../../commons/css/topbar.scss';


</style>