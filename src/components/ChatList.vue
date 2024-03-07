<template>
  <view class="content">
    <view class="apply"></view>
    <view class="list" v-for="item in friend" :key="item.id">

      <!-- 循环体 -->
      <view class="list-item">
        <view class="list-item-pic">
          <text class="tip">{{item.tip}}</text>
          <image :src="item.imgurl"></image>
          <!--  这个冒号是动态绑定的意思吗？ -->
        </view>
        <view class="list-item-chat">
          <view class="upper">
            <view class="name">{{item.name}}</view>
            <view class="time">{{item.time}}</view>
          </view>
          <view class="last">{{item.last}}</view>
        </view>
      </view>
    </view>

  </view>
  
</template>

<script>
import datas from '../commons/js/datas.js';
import { getDate, component } from '../commons/js/myFun.js';
// import axios from 'axios';
import {ref, onMounted} from 'vue';
export default {
  name: 'chatList',

  setup() {
    const friend = ref([]);
    // 从后端获取数据
    // var datas = [];

    const urlResolve = (imgurl) => {
      return `../../static/test_imgs/${imgurl}`;
    }

    const getinfo = () => {
      friend.value = datas.friend();
      // 左边的是这个的friend 右边的是data.js中的friend
      // friend.value = datas.data;
      for( let i = 0; i < friend.value.length; i++) {
        friend.value[i].imgurl = urlResolve(friend.value[i].imgurl);
        friend.value[i].time = getDate(new Date(friend.value[i].time));
      }
    }

    // let sendRequest = () => {
    //   console.log('checksendrequest');
    //   // 准备发送的数据，如果有的话

    //   // 发送 POST 请求
    //   axios.get('http://localhost:63040/abc')
    //     .then(response => {
    //       // 请求成功，可以在这里处理返回的数据
          
    //       datas = response.data;
    //       console.log(datas.data);
    //       getinfo();
    //     })
    //     .catch(error => {
    //       // 请求失败，可以在这里处理错误信息
    //       console.error("请求失败:", error);
    //     });
    // }

    onMounted( ()=> {
      
      // sendRequest();
      getinfo();

    });

    return {
      friend,
    };

  },
}
</script>

<style lang="scss">
  .content {
    padding-top: var(--status-bar-height);
    margin-top:116rpx;
    // display: flex;
  }

  .list-item {
    height: 96rpx;
    // padding: 16rpx;
    padding: 16rpx $uni-spacing-col-base;
    &:active {
      background-color: $uni-bg-color-grey;
    }
    .list-item-pic {
      position: relative;
      float: left;
      image {
				width: 96rpx;
				height: 96rpx;
				border-radius:$uni-border-radius-base;
        // 可以选择给图片添加背景颜色
			}
      .tip {
        z-index: 100;
        position: absolute;
        top: -8rpx;
        // 高于头像6rpx
        left: 68rpx;
        height: 36rpx;
        min-width: 24rpx;

        background: $uni-color-error;
        // 使其成为圆形
        // border-radius: $uni-border-radius-circle;
        border-radius: 20rpx;
        padding: 0 8rpx;

        font-size: $uni-font-size-sm;
        color: $uni-text-color-inverse;
        line-height: 36rpx;
        text-align: center;
      }
    }
    .list-item-chat {
      // padding-left:$uni-spacing-col-base;
      padding-left: 120rpx;

      .upper {
        height: 50rpx;
        .name {
          float: left;
          font-size: 36rpx;
          font-weight: 400;
          color: rgba(39,40,50,1);
          line-height: 50rpx;
        }
        .time {
          float: right;
          font-size: $uni-font-size-sm;
          color: $uni-text-color-disable;
          line-height: 50rpx;
        }
      }
      .last {
        font-size: $uni-font-size-base;
        color: $uni-text-color-grey;
        line-height: 40rpx;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

</style>