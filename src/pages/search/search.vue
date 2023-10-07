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
          <input type="search" placeholder="搜索用户/群" class="search" @input="search">
        </view>
      </template>

      <template v-slot:right>
        <view class="topbar-right">
          <!-- <image src="../../static/test_imgs/4.jpg"></image> -->
          <view class="topbar-cancel">取消</view>
        </view>
      </template>
    </top-bar>

    <view class="content">
      <view class="users result">
        <h1 class="title">用户</h1>
        
        <!-- 循环体 -->
        <view class="list user">
          <view class="pic">
            <image src="../../static/test_imgs/10.jpg" alt="pic"/>
          </view>
          <view class="names">
            <view class="name">fyb</view>
            <view class="email">1841025882@qq.com</view>
          </view>
          <view class="button">发送</view>
        </view>
        <view class="list user">
          <view class="pic">
            <image src="../../static/test_imgs/10.jpg" alt="pic"/>
          </view>
          <view class="names">
            <view class="name">fyb</view>
            <view class="email">1841025882@qq.com</view>
          </view>
          <view class="button">发送</view>
        </view>
      </view>

      <view class="groups result">
        <h1 class="title">群组</h1>
        
        <!-- 循环体 -->
        <view class="list group">
          <view class="pic">
            <image src="../../static/test_imgs/10.jpg" alt="pic"/>
          </view>
          <view class="names">
            <view class="name">fy群</view>
            <view class="email">1841025882@qq.com</view>
          </view>
          <view class="button">发送</view>
        </view>
        <view class="list group">
          <view class="pic">
            <image src="../../static/test_imgs/10.jpg" alt="pic"/>
          </view>
          <view class="names">
            <view class="name">fyb</view>
            <view class="email">1841025882@qq.com</view>
          </view>
          <view class="button">发送</view>
        </view>
      </view>
    </view>
</template>

<script>
import TopBar from '../../components/TopBar.vue';
// import datas from '../../commons/js/datas'
export default {
  components: {
    TopBar
  }
  // setup() {
  //   const chatlist = ref([]);

  //   const urlResolve = (imgurl) => {
  //     return `../../static/test_imgs/${imgurl}`;
  //   }

  //   const getinfo = () => {
  //     chatlist.value = datas.chatList();
  //     // 左边的是这个的chatlist 右边的是data.js中的chatlist

  //     for( let i = 0; i < chatlist.value.length; i++) {
  //       chatlist.value[i].imgurl = urlResolve(chatlist.value[i].imgurl);
  //       console.log(chatlist.value[i].imgurl); 
  //     }
  //     console.log(chatlist);
  //     // console.log(chatlist.value);
  //     // console.log(Array.isArray(chatlist));
  //   }

  //   onMounted( ()=> {
  //     getinfo();
  //   });

  //   return {
  //     chatlist,
  //   };

  // },
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


    font-weight: 400;

  }
  .button {
    float: right; 
    width: 120rpx;
    height: 48rpx;
    background: $uni-color-primary;
    border-radius: 24rpx;
    font-size: $uni-font-size-sm;
    color: $uni-text-color;
    line-height: 48rpx;
    margin-top: 16rpx;
    text-align: center;
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