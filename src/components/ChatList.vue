<template>
  <view class="content">
    <view class="apply"></view>
    <view class="list" v-for="item in friend" :key="item.id">

      <!-- 循环体 -->
      <view class="list-item">
        <view class="list-item-pic">
          <text class="tip">{{item.tip}}</text>
          <image :src="item.imgUrl"></image>
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
// import datas from '../commons/js/datas.js';
import { getDate, component } from '../commons/js/myFun.js';
import axios from 'axios';
// import {ref, onMounted} from 'vue';
export default {
  name: 'chatList',

  // 组合式API的尝试
  // setup() {
  //   const friend = ref([]);
  //   // 从后端获取数据
  //   // var datas = [];
  //   const urlResolve = (imgurl) => {
  //     return `../../static/test_imgs/${imgurl}`;
  //   }

  //   const getinfo = () => {
  //     friend.value = datas.friend();
  //     // 左边的是这个的friend 右边的是data.js中的friend
  //     // friend.value = datas.data;
  //     for( let i = 0; i < friend.value.length; i++) {
  //       friend.value[i].imgurl = urlResolve(friend.value[i].imgurl);
  //       friend.value[i].time = getDate(new Date(friend.value[i].time));
  //     }
  //   }
  //   onMounted( ()=> {
  //     getinfo();
  //   });
  //   return {
  //     friend,
  //   };
  // },

  // 选项式API
  data() {
    return {
      friend: [],
      
    }
  },
  methods: {
    urlResolve(imgurl) {
      // return `../../static/test_imgs/${imgurl}`;
      return this.$serverUrl + imgurl;
      console.log('urlR');
    },

    getinfo() {
      return new Promise ((resolve,reject) => {
        uni.request({
          url:this.$serverUrl + '/index/getUsers',
          data: { 
            id:this.id,
            state: 0,
            token: this.token,
          },
          method: 'POST',
          success: (data) => {
            let status = data.data.status;
            if (status == 200) {
              this.friend = data.data.result;
              // resolve (res > 0);
              this.transinfo();
            } else if(status == 500 ) {
              uni.showToast({
                title:'服务器出错 代码500',
                icon: 'none',
                duration: 2000,
              });
              reject(new Error('服务器出错'));
            } else if(status == 300 ) {
              // token过期，重新登录
              uni.navigateTo({
                url: '../signin/signin?name =' + this.user,
              })
              reject(new Error('Token过期'));
            }
          },
          fail: (err) => {
            reject(err);
          }
        })
      })
    },

    transinfo() {
      // friend.value = this.friend;
      // 左边的是这个的friend 右边的是data.js中的friend
      // friend.value = datas.data;
      for( let i = 0; i < this.friend.length; i++) {
        this.friend[i].imgUrl = this.urlResolve(this.friend[i].imgUrl);
        // friend.value[i].time = getDate(new Date(friend.value[i].time));
      }
    },
    // 获取缓存数据
    getStorage() {
      try {
        const value = uni.getStorageSync('user');
        if(value) {
          this.id = value.id;
          this.name = value.name;
          this.imgurl = this.$serverUrl + value.imgurl;
          this.token = value.token;
        } else {
          uni.navigateTo({
            url: '../signin/signin',
          })
        }
      } catch (error) {
        console.log('获取登陆页面个人数据错误' + error);
      }
    },
  },
  mounted() {
    this.getStorage();
    this.getinfo();
  }
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