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
      <view class="users">
        <h1 class="title">用户</h1>
        
        <!-- 循环体 -->
        <view class="user">
          <view class="user-pic"></view>
          <view class="user-name"></view>
          <view class="user-button"></view>
        </view>
      </view>

      <view class="groups">
        <h1 class="title">群组</h1>
        
        <!-- 循环体 -->
        <view class="group">
          <view class="group-pic"></view>
          <view class="group-name"></view>
          <view class="group-button"></view>
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

  .user {
    height: 96rpx;
    // padding: 16rpx;
    padding: 16rpx $uni-spacing-col-base;
    // &:active {
    //   background-color: $uni-bg-color-grey;
    // }
    float: left;
    .user-pic {
      position: relative;
      float: left;
      image {
				width: 96rpx;
				height: 96rpx;
				border-radius:$uni-border-radius-base;
        // 可以选择给图片添加背景颜色
			}
    }
    .user-name {
      // padding-left:$uni-spacing-col-base;
      padding-left: 120rpx;

      font-size: 36rpx;
      font-weight: 400;
      color: rgba(39,40,50,1);
      line-height: 50rpx;

    }
    .user-button {
      float: right;
      width: 100rpx;
      height: 100rpx;
    }
  }

  .group {
  height: 96rpx;
  // padding: 16rpx;
  padding: 16rpx $uni-spacing-col-base;
  // &:active {
  //   background-color: $uni-bg-color-grey;
  // }
  float: left;
    .group-pic {
      position: relative;
      float: left;
      image {
        width: 96rpx;
        height: 96rpx;
        border-radius:$uni-border-radius-base;
        // 可以选择给图片添加背景颜色
      }
    }
    .group-name {
      // padding-left:$uni-spacing-col-base;
      padding-left: 120rpx;

      font-size: 36rpx;
      font-weight: 400;
      color: rgba(39,40,50,1);
      line-height: 50rpx;

    }
    .group-button {
      float: right;
      width: 100rpx;
      height: 100rpx;
    }
  }

</style>