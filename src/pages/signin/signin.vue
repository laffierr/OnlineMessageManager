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
        <input type="password" placeholder="密码" class="pw" v-model="psw">
      </view>
      <view class="tips" :style="{display: pair}">用户名或密码错误</view>
      <view class="sub" @tap="login">登录</view>
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
      psw:'',
      token: '',
      pair: 'none',
    }
  },
  methods: {
    checkEmail(e) {
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
    login(){
      if (this.mail && this.psw) {
        uni.request({
          url:this.$serverUrl + '/signin/pair',
          data: {
            data: this.mail,
            psw: this.psw,
          },
          method: 'POST',
          success: (data) => {
            let status = data.data.status;
            if (status == 200) {
              var res = data.data.data;
              console.log(res);
              // 匹配成功
              this.pair = 'none';
              // 在本地存储用户信息
              try {
                uni.setStorageSync('user', {'id':res.id, 'name':res.name, 'imgurl':res.imgurl, 'token':res.token });
              } catch (error) {
                console.log('本地数据存储错误' + error);
              }

              // try {
              //   const i = uni.getStorageSync('user');
              //   console.log(i);
              // } catch (error) {
              //   console.log('本地数据存储错误' + error);
              // }

              // 跳转到首页 
              uni.navigateTo({
                url: '../index/index',
              })
            } else if (status == 400) {
              // 用户名、邮箱、密码错误
              this.pair = 'block';
              // 清空密码
              this.psw = '';
            } else if (status == 500) {
              // 服务器逻辑出错
              uni.showToast({
                title: '服务器内部错误',
                icon: 'none',
                duration: 2000,
              });
            }
          }

        })
      }
    }
  },
  onLoad(e) {
    uni.setNavigationBarTitle({
        title: '用户登录',
    });
    if (e.user) {
      this.user = e.user;
      uni.showToast({
        title:'用户注册成功，现返回登陆界面进行登录',
        icon:'none',
        duration: 2000,
      });
    } else if (e.name) {
      this.user = e.name;
      uni.showToast({
        title:'登录已过期',
        icon:'none',
        duration: 2000,
      })
    }
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