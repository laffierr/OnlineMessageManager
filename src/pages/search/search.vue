<template>
  <!-- <top-bar
    pageTitle="登录"
    leftEleType="search"
    rightEleType="cancel"
    /> -->
    <top-bar>
      <template v-slot:left>
        <view class="topbar-left">
          <!-- <image src="../../static/test_imgs/3.jpg"></image> -->
          <input type="search" placeholder="搜索用户/群" class="search" @input="search"/>
        </view>
      </template>

      <template v-slot:right>
        <view class="topbar-right">
          <!-- <image src="../../static/test_imgs/4.jpg"></image> -->
          <view class="topbar-cancel" @tap="back">取消</view>
        </view>
      </template>
    </top-bar>

    <view class="content">
      <view class="users result">
        <h1 class="title" v-if="userarr.length > 0">用户</h1>
        
        <!-- 循环体 -->
        <view class="list user" v-for="(item,index) in userarr" :key="index">
          <view class="pic">
            <image :src="item.imgurl" alt="pic"/>
          </view>
          <view class="names">
            <view class="name" v-html = "item.name"></view>
            <view class="email" v-html = "item.email"></view>
          </view>
          <view class="button-rt send" v-if="item.tip == 1">发消息</view>
          <view class="button-rt add" v-if="item.tip == 0">加好友</view>
        </view>
      </view>
      <view class="groups result">
        <h1 class="title">群组</h1>
        
        <!-- 循环体 -->
        <!-- <view class="list group" v-for="(item,index) in userarr" :key="index"> -->
        <view class="list group">
          <view class="pic">
            <image src="../../static/test_imgs/10.jpg" alt="pic"/>
            <!-- <image :src="item.imgurl" alt="pic"/> -->
          </view>
          <view class="names">
            <view class="name">fy群</view>
            <view class="email">1841025882@qq.com</view>
          </view>
          <view class="button-rt send">发消息</view>
        </view>
        <view class="list group">
          <view class="pic">
            <image src="../../static/test_imgs/10.jpg" alt="pic"/>
          </view>
          <view class="names">
            <view class="name">fyb</view>
            <view class="email">1841025882@qq.com</view>
          </view>
          <view class="button-rt add">进入</view>
        </view>
      </view>
    </view>
</template>

<script>
import TopBar from '../../components/TopBar.vue';
import datas from '../../commons/js/datas'
export default {
  components: {
    TopBar
  },
  data() {
    return {
      userarr:[],
    }
  },
  methods: {
    // 获取搜索的值
    search:function(e) {
      console.log(e.detail);
      this.userarr =[];
      let searchval = e.detail.value;
      if(searchval.length > 0) {
        this.searchUser(searchval);
      }
    },
    // 判断搜索到的用户是否是好友
    isFriend:function(e) {
      let tip = 0;
      let arr = datas.isFriend();
      for (let i=0; i<arr.length; i++) {
        if (arr[i].friend == e.id) {
          tip = 1;
        }
      }
      e.tip = tip;
      console.log(e.tip);
    },
    // 实现用户搜索功能(匹配用户的名字和邮箱)
    searchUser:function(e) {
      let arr = datas.friend();
      let exp = eval("/"+e+"/g");

      for (let i=0; i<arr.length;i++) {
        if (arr[i].name.search(e) != -1 || arr[i].email.search(e) != -1) {

          this.isFriend(arr[i]);

          // 实现图片匹配 两种都可以
          arr[i].imgurl = `../../static/test_imgs/${arr[i].imgurl}`;
          // arr[i].imgurl = `../../static/test_imgs/` + arr[i].imgurl;

          // 实现被搜索的文字高亮
          arr[i].name = arr[i].name.replace(exp,`<span style="color:#4AAAFF">${e}</span>`);
          arr[i].email = arr[i].email.replace(exp,`<span style="color:#4AAAFF;">${e}</span>`);

          this.userarr.push(arr[i]);
        }
      }
    },

  }
}
</script>

<style lang="scss">
@import "../../commons/css/topbar.scss";
.content {
    padding-top:116rpx;
    // display: flex;
  }

.title {
  // font-size: 44rpx;
  margin: 5rpx 32rpx;
  color: $uni-text-color;
  line-height: 96rpx;
}

.list {
  height: 100rpx;
  // width: 100%;
  // 将渲染出的列表项设置为块级元素
  padding: 10rpx $uni-spacing-col-base;
  // 给列表项添加内边距
  margin: auto 0rpx;
  .pic {
    position: relative;
    float: left;
    image {
      width: 80rpx;
      height: 80rpx;
      border-radius:$uni-border-radius-base;
      // 可以选择给图片添加背景颜色
    }
  }
  .names {
    padding-left:$uni-spacing-col-base;
    float: left;
    font-weight: 400;
    // padding-left: 120rpx;
    .name {
      font-size: 36rpx;
      color: $uni-text-color;
      line-height: 50rpx;
    }
    .email {
      font-size: $uni-font-size-sm;
      color: $uni-text-color;
      line-height: 28rpx;
    }
  }
  .button-rt {
    float: right; 
    width: 120rpx;
    height: 48rpx;
    border-radius: 24rpx;
    font-size: $uni-font-size-sm;
    line-height: 48rpx;
    margin-top: 16rpx;
    text-align: center;
  }
  .send {
    background: rgba(74,170,255,0.9);
    color: $uni-text-color;
  }
  .add {
    background: rgba(74,170,255,0.1);
    color: $uni-color-primary;
  }
}



.user {
  // height: 96rpx;
  // padding: 16rpx;
  // &:active {
  //   background-color: $uni-bg-color-grey;
  // }
  // float: left;
}

.group {
// height: 96rpx;
// padding: 16rpx;
// &:active {
//   background-color: $uni-bg-color-grey;
// }
// float: left;
}

</style>