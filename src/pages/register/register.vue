<template>
  <view class="content">
    <!-- 使用 TopBar 组件，传递不同的属性 -->
    <!-- <TopBar
      pageTitle="注册"
      leftEleType="back"
      rightELeType="close"
    /> -->
    <top-bar>
    <template v-slot:left>
      <view class="topbar-left">
        <image src="../../static/test_imgs/3.jpg"></image>
      </view>
    </template>

    <template v-slot:right>
      <view class="topbar-right">
        <image src="../../static/test_imgs/4.jpg"></image>
      </view>
    </template>
  </top-bar>

    <view class="signin">
      <!-- <view class="sign">
        登录
      </view> -->
      <h1 class="title">Register</h1>
      <view class="inputs">
        <input type="text" placeholder="用户名">
        <input type="text" placeholder="邮箱">
        <input type="password" placeholder="密码">
      </view>
      <view class="sub">登录</view>
    </view>


  </view>
</template>

<script>
import TopBar from '../../components/TopBar.vue';

export default {
  components: {
    TopBar,
  },
};
</script>

<style lang="scss">
// @import url('../../commons/css/topbar.scss');
// 使用正常的css导入方式会导致scss函数，变量，混合不会正常工作
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