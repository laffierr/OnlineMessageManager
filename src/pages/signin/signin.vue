<template>
  <view class="content">
    <!-- <TopBar
      pageTitle="登录"
      leftEleType="close"
      rightEleType="register"
    /> -->
  <top-bar>
    <template v-slot:left>
      <view class="topbar-left">
        <image src="../../static/test_imgs/1.jpg"></image>
      </view>
    </template>

    <template v-slot:right>
      <view class="topbar-right">
        <!-- <image src="../../static/test_imgs/2.jpg"></image> -->
        <view class="topbar-signin">注册</view>
      </view>
    </template>
  </top-bar>
    <view class="signin">
      <!-- <view class="sign">
        登录
      </view> -->
      <h1 class="title">Sign in</h1>
      <!-- <h1 class="title" v-if!="formValid">Sign in</h1> -->
      <!-- <h1 class="error">用户名或密码错误</h1> -->
      <!-- <h1 class="error" v-else>用户名或密码错误</h1> -->
      <view class="inputs">
        <input type="text" placeholder="用户名/邮箱">
        <input type="password" placeholder="密码">
      </view>
      <view class="sub">登录</view>
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
  Set() {
    const goBack = () => {

    }

    const search = () => {}
  }

}
</script>

<style lang="scss">
@import "../../commons/css/topbar.scss";

.content {
  display: flex;
  flex-direction: column;
  padding-top: var(--status-bar-height);
  padding-bottom: $uni-spacing-col-base;
}

.signin {
  padding-top: 328rpx;
  // padding-left: 24rpx;
  margin-left: $uni-spacing-col-lg;
  // padding-top: 60px;
  // margin: 0 auto;

  .title {
    margin: 36rpx 0;
    font-size: 96rpx;
    // text-align: center ;
    color: #4d4d4d;
  }

  .error {
    margin: 36rpx 0;
  }

  .inputs{
    // margin-left: 36rpx;
    input {
      margin-top: 24rpx;
      margin-right: 184rpx;
      border-bottom: 1rpx solid #ccc;  
      font-size: $uni-font-size-lg; 
      color: $uni-text-color-grey;
      height: 80rpx; 
      line-height: 80rpx; 
    }
  }

  .sub {
    float: right;
    margin-right: 182rpx;
    // background: $uni-bg-color-grey;
    border-radius: 6rpx;
    font-size: large;
    font-weight: bold;
    // text-align: center;
    line-height: 96rpx;
    color: #4d4d4d;
    margin-top: 40rpx;
  }
}
</style>