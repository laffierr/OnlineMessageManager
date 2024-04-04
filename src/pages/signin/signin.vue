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
          <!-- <image src="../../static/test_imgs/1.jpg"></image> -->
          <i class="iconfont icon-setting"></i>

        </view>
      </template>

      <template v-slot:right>
        <view class="topbar-right">
          <!-- <image src="../../static/test_imgs/2.jpg"></image> -->
          <navigator url="../register/register" class="topbar-signin">注册</navigator>
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
        <input type="text" placeholder="用户名/邮箱" class="user" @blur="checkEmail" v-model="mail">
        <input type="password" placeholder="密码" class="pw">
      </view>
      <view class="tips">用户名或密码错误</view>
      <view class="sub" @tap="testFunc">登录</view>
    </view>
  </view>
  
</template>

<script>
import { Navigator, View } from '@dcloudio/uni-h5';
import TopBar from '../../components/TopBar.vue';

export default {
  components: {
    TopBar,
    View,
    Navigator
  },
  data() {
    return {
      mail: '',
      token: '',
    }
  },
  methods: {
    testFunc() {
      uni.request({
        url: 'http://47.113.103.222:3000/signin/pair',
        method: 'POST',
        data: {
          // mail: this.mail,
          // mail: 'laffier7596@gmail.com',
          // name: 'wyz',
          // psw:'admin0',
          token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MGI4N2EwMzI2NTZjNDVmMDg3Zjc5OCIsInRpbWUiOiIyMDI0LTA0LTAzVDAzOjAzOjE4LjQzM1oiLCJpYXQiOjE3MTIxMTMzOTgsImV4cCI6MTcxNDcwNTM5OH0.TO3YW3nagaknExvrH9xo7P2mjQHhD23qO09_CnflA14',
          data: 'wyz',
          psw: 'admin0',
          // data:'996158618@qq.com',
          // type: 'wyz',
        },
        success: (res) => {
          // console.log(res.data.data.token);
          console.log(res);
          console.log('success');
        },
        fail: (err) => {
          console.error(err);
          console.log('failure');
        }
      })
    },
    checkEmail: function(e) {
      this.email = e.detail.value;
      console.log(this.email);
      // var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
      var reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
      if (this.email.length > 0) {
        if (reg.test(this.email)) {
          this.invalid = false;
          console.log('邮箱格式正确');
        } else {
          this.invalid = true;
          console.log('邮箱格式错误');
        }
      }
    },
  },
  onLoad() {
    uni.setNavigationBarTitle({
        title: '用户登录',
    });
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
      color: #4d4d4d;
      height: 80rpx; 
      line-height: 80rpx; 
    }
  }
  .tips { 
    font-size: $uni-font-size-lg; 
    color: rgba(255, 67, 67, 0.856);
    line-height: 56rpx; 
    float: left;
  }

  .sub {
    float: right;
    width: 182rpx;
    height: 80rpx;
    text-align: center;
    margin-top: 64rpx;
    margin-right: 128rpx;
    background: rgba(192, 192, 192, 0.295);
    // border-radius: 6rpx;
    font-size: large;
    font-weight: bold;
    // text-align: center;
    line-height: 80rpx;
    color: #4d4d4d;

    :hover {
      background: $uni-bg-color-grey;
    }
  }
}
</style>