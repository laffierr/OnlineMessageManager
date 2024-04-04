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
        <!-- <image src="../../static/test_imgs/3.jpg"></image> -->
        <navigator open-type="navigateBack" delta="1" animation-type="pop-out" animation-duration="300" class="iconfont icon-arrow-left-bold"></navigator>
      </view>
    </template>

    <!-- <template v-slot:right>
      <view class="topbar-right">
        <i class="iconfont icon-close"></i>
      </view>
    </template> -->
  </top-bar>

    <view class="register">
      <!-- <view class="sign">
        登录
      </view> -->
      <h1 class="title">Register</h1>
      <view class="inputs">
        <view class="inputs-div">
          <input type="text" placeholder="用户名" class="user" v-model="username">
          <view class="emply" v-if="emply">有人起了</view>
        </view>
        <view class="inputs-div"><!--  -->
          <input type="text" placeholder="邮箱" class="email" @blur="checkEmail" v-model="mail">
          <view class="emply" v-if="emply">有人起了</view>
          <view class="invalid" v-if="invalid">邮箱无效</view>
        </view>
        <view class="inputs-div">
          <input type="password" placeholder="密码" v-model="password">
          <!-- <view class="emply" v-if="emply" @tap="eyes">有人起了</view> -->
        </view>
      </view>
      <view class="sub" @tap="createUser">注册</view>
    </view>


  </view>
</template>

<script>
import TopBar from '../../components/TopBar.vue';

export default {
  components: {
    TopBar,
  },
  data() {
    return {
      type: 'password',
      invalid: false,
      emply: false,
      username: '',
      mail: '',
      password: '',
    };
  },
  methods: {
    // 密码显示
    eyes: function() {
      if (this.type === 'password') {
        this.type = 'text';
        // this.eyes =! this,eyes;
        // 修改路径
      } else {
        this.type = 'password';
        // this.eyes =! this.eyes;
        // 修改路径
      }
    },
    // 检测邮箱格式是否正确
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
    // 后端创建用户
    createUser() {
      uni.request({
        url: 'http://47.113.103.222:3000/signup/add',
        method: 'POST',
        data: {
          name: this.username,
          mail: this.mail,
          psw: this.password,
        },
        success: (res) => {
          this.sendMail();
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
    // 邮箱发送成功邮件
    sendMail() {
      uni.request({
        url: 'http://47.113.103.222:3000/mail',
        method: 'POST',
        data: {
          mail: this.mail,
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
  },
  onLoad() {
    uni.setNavigationBarTitle({
        title: '用户注册',
        // 动态生成需要路由守卫
    });
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

.register {
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

    .inputs-div {
      position: relative;
      input {
        margin-top: 24rpx;
        margin-right: 184rpx;
        border-bottom: 1rpx solid #ccc;  
        font-size: $uni-font-size-lg; 
        color: $uni-text-color-grey;
        height: 80rpx; 
        line-height: 80rpx; 
      }

      .emply,.invalid {
        position: absolute;
        right: 0;
        top: 0;
        float: right;
        line-height: 88rpx;
        font-size: $uni-font-size-base;
        font-weight: 500;
        color: red;
      }

      .ok {
        position: absolute;
        right: 0;
        top: 76rpx;
        width: 42rpx;
        height: 32rpx;
      }

      .eyes {
        position: absolute;
        right: 0;
        top: 76rpx;
        width: 42rpx;
        height: 32rpx;
      }
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