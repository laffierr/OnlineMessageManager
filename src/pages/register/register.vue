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
          <input type="text" placeholder="用户名" class="user" v-model="username" @blur="init">
          <view class="emply" v-if="emply">有人起了</view>
        </view>
        <view class="inputs-div"><!--  -->
          <input type="text" placeholder="邮箱" class="email" @blur="emailFormat" v-model="email">
          <view class="emply" v-if="emply">有人起了</view>
          <!-- <view class="invalid" v-if="invalid">邮箱无效</view> -->
        </view>
        <view class="inputs-div">
          <input type="password" placeholder="密码" v-model="password" @blur="init">
          <!-- <view class="emply" v-if="emply" @tap="eyes">有人起了</view> -->
        </view>
        <view class="checkFail tips" :style="{display:checkFail}">请输入完整的用户名、邮箱和密码</view>
        <view class="emailFail tips" :style="{display:emailFail}">请检查邮箱是否正确</view>
        <view class="nameEmply tips" :style="{display:nameEmply}">用户名已被占用</view>
        <view class="emailEmply tips" :style="{display:emailEmply}">邮箱已被占用</view>
        <view class="sub" @tap="infoCheck">注册</view>
      </view>
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
      checkFail: 'none',
      emailFail: 'none',
      nameEmply: 'none',
      emailEmply: 'none',
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    // 密码显示
    // eyes: function() {
    eyes() {
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
    // 使用e.detail也可以获取信息

    emailFormat(e) {
      console.log(this);
      // this.email = e.detail.value;
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
      this.init();
    },
    // 后端创建用户
    createUser() {
      uni.request({
        url: 'http://47.113.103.222:3000/signup/add',
        method: 'POST',
        data: {
          name: this.username,
          mail: this.email,
          psw: this.password,
        },
        success: (res) => {
          // console.log(res.data.data.token);
          console.log('创建用户成功' + res);
          // 因为后端注册函数返回的是promise所以不一样
          // let status = res.statusCode;
          let status = res.data.status;
          console.log(status);
          if (status == 200) {

            // 注册成功后发送邮件
            // this.sendMail();
            // 邮件不从前端发送，从后端发送

            // 跳转到登录页面
            console.log('jump')

            uni.navigateTo({
              url:'../signin/signin?user=' + this.user,
            })
          } else if(status == 500) {
            uni.showToast ({
              title:'服务器出错 代码500',
              icon: 'none',
              duration: 2000,
            })
          }

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
        url: this.$serverUrl + '/mail',
        method: 'POST',
        data: {
          email: this.email,
        },
        success: (res) => {
          // console.log(res.data.data.token);
          console.log(res);
          console.log('邮件发送成功');
        },
        fail: (err) => {
          console.error(err);
          console.log('failure');
        }
      })
    },

    init(){
      this.checkFail = 'none';
      this.emailFail = 'none';
      this.nameEmply = 'none';
      this.emailEmply = 'none';
    },

    // 判断用户名是否重复
    checkUsername() {
      return new Promise ((resolve,reject) => {
        uni.request({
          url:this.$serverUrl + '/signup/occupy',
          data: {
            data: this.username,
            type: 'name',
          },
          method: 'POST',
          success: (data) => {
            console.log(data);
            let status = data.data.status;
            if (status == 200) {
              let res = data.data.data;
              resolve(res > 0)
            } else if(status == 500 ) {
              uni.showToast({
                title:'服务器内部错误',
                icon: 'none',
                duration: 2000,
              });
              reject(new Error('服务器出错'));
            }
          },
          fail: (err) => {
            reject(err);
          }
        })
      })
    },

    // 判断邮箱是否重复
    checkEmail() {
      return new Promise ((resolve,reject) => {
        uni.request({
          url:this.$serverUrl + '/signup/occupy',
          data: {
            data: this.email,
            type: 'email',
          },
          method: 'POST',
          success: (data) => {
            console.log(data);
            let status = data.data.status;
            if (status == 200) {
              let res = data.data.data;
              resolve (res > 0);
              // if (res > 0) {
              //   // 邮箱存在
              //    this.emailEmply = true;
              // }else {
              //   // 邮箱不存在
              //   this.emailEmply = false;
              // }
            } else if(status == 500 ) {
              uni.showToast({
                title:'服务器出错 代码500',
                icon: 'none',
                duration: 2000,
              });
              reject(new Error('服务器出错'));
            }
          },
          fail: (err) => {
            reject(err);
          }
        })
      })
    },

    infoCheck(){
      // 判断用户名 邮箱 密码是否有空
      if (this.username.length == 0 || this.password.length == 0 || this.email.length == 0) {
        this.checkFail = 'block';
        this.emailFail = 'none';
        // 输出有空 
      } else if(this.invalid == true) {
        this.emailFail = 'block';
        this.checkFail = 'none';
        // 输出邮箱格式有误
      } else {
        this.emailFail = 'none';
        this.checkFail = 'none';
        this.ifRegister();
      }
    },

    // 等待判断的异步函数结束在进行创建
    async ifRegister() {
      try {
        this.nameEmply = await this.checkUsername() ? 'block' : 'none';
        // this.nameEmply = await this.checkUsername();

        // this.emailEmply = await this.checkEmail();
        if (!await this.checkUsername()) {
          this.emailEmply = await this.checkEmail() ? 'block' : 'none';
          if(!await this.checkEmail()) {
            console.log('判断成功，准许创建');
            this.createUser()
          }
        }
        // if (!this.nameEmply  && !this.emailEmply) {
        //   console.log('判断成功，准许创建');
        //   this.createUser()
        // }
      } catch(error) {
        console.error('有重复',error)
      }
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

      // 判断输入成功
      // .ok {
      //   position: absolute;
      //   right: 0;
      //   top: 76rpx;
      //   width: 42rpx;
      //   height: 32rpx;
      // }

      .eyes {
        position: absolute;
        right: 0;
        top: 76rpx;
        width: 42rpx;
        height: 32rpx;
      }
    }

    .checkFail,.emailFail,.nameEmply,.emailEmply {
      margin-top: 30rpx;
      font-size: $uni-font-size-base;
      font-weight: 500;
      color: rgba(255, 67, 67, 0.856);
      line-height: 56rpx; 
      float: left;
    }

    // .tips { 
    //   font-size: $uni-font-size-lg; 
    // }

    .sub {
    float: right;
    margin-top: 64rpx;
    margin-right: 182rpx;
    width: 182rpx;
    height: 80rpx;
    border-radius: 6rpx;
    font-size: large;
    font-weight: bold;
    text-align: center;
    line-height: 80rpx;
    color: #4d4d4d;
    background: rgba(192, 192, 192, 0.295);

    :hover {
      background: $uni-bg-color-grey;
    }
  }
  }

  
}

</style>