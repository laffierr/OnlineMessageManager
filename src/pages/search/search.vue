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
          <!-- <input type="search" placeholder="搜索用户/群" class="search" @input="searchUser"/> -->
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
          <view class="button-rt add" v-if="item.tip == 0" @tap="addFriend(item._id)">加好友</view>
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
    <view class="modify" :style="{bottom: -+widHeight + 'px'}" :animation="animationData">
      <view class="modify-header">
        <view class="close" @tap="modify">返回</view>
        <view class="title">好友申请信息</view>
        <view class="define" @tap="addFriendSubmit">确定</view>
      </view>
      <view class="modify-main">
        <textarea v-model="addMes" class="modify-content"></textarea>
      </view>
    </view>
</template>

<script>
import TopBar from '../../components/TopBar.vue';
import datas from '../../commons/js/datas'
import { debounce } from '../../commons/js/myFun';
export default {
  components: {
    TopBar
  },
  data() {
    return {
      userarr:[],
      animationData:{},
      addMes:'',
      isModify:false,
      widHeight:'',
      // name: '',
      friendId:'',
      animationData: {},  
    }
  },

  methods: {
    // 后端搜索用户
    searchUser(e){
      return new Promise ((resolve,reject) => {
        uni.request({
          url:this.$serverUrl + '/search/user',
          data: { 
            data: e,
            token: this.token,
          },
          method: 'POST',
          success: (data) => {
            let status = data.data.status;
            if (status == 200) {
              let arr = data.data.data;
              let exp = eval("/"+e+"/g");
              for (let i=0; i<arr.length;i++) {
                console.log(i);
                this.isFriend(arr[i],e);
              }
              // resolve (res > 0);
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

    // 改变this指向 从window变成object
    search(e){
      let deSearch = debounce(this.searchAfter);
      deSearch.call(this,e)
    },

    // 获取搜索的值
    // 前置防抖
    // 使用箭头函数防止函数自己产生作用域导致this无法使用
    searchAfter:function(e) {
      this.userarr = [];
      let searchval = e.detail.value;
      if(searchval.length > 0) {
        this.searchUser(searchval);
      }
    },
    // },

    // 获取缓存数据
    getStorage() {
      try {
        // uni.clearStorage('user');
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
    // 判断搜索到的用户是否是好友
    isFriend:function(arri,e) {
      let tip = 0;
      // e.tip = tip;
      return new Promise ((resolve,reject) => {
        uni.request({
          url:this.$serverUrl + '/search/isfriend',
          data: { 
            id: this.id,
            friendId: arri._id,
            token: this.token,
          },
          method: 'POST',
          success: (data) => {
            // console.log(data);
            let status = data.data.status;
            if (status == 200) {
              tip = 1;
            } else if(status = 400 ) {
              tip = 0;
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
            arri.tip = tip;
            this.friendShow(arri,e);
          },
          fail: (err) => {
            reject(err);
          }
        })
      })
    },

    friendShow(arri,e){
      let exp = eval("/"+e+"/g");
      // 实现图片匹配 两种都可以
      // console.log(arri);
      arri.imgurl = this.$serverUrl + arri.headUrl;
      // arr[i].imgurl = `../../static/test_imgs/` + arr[i].imgurl;
      // 实现被搜索的文字高亮
      arri.name = arri.name.replace(exp,`<span style="color:#4AAAFF">${e}</span>`);
      arri.email = arri.email.replace(exp,`<span style="color:#4AAAFF;">${e}</span>`);
      this.userarr.push(arri);
    },

    modify(type) {
      // this.modifyTitle = type;
      this.isModify = !this.isModify;
      var animation = uni.createAnimation({
        duration: 300,
        timingFunction: 'ease'
      })
      if(this.isModify){
        console.log('up');
        animation.bottom(0).step();
      } else {
        console.log(this.isModify);
        // animation.bottom.apply(-this.widHeight).step();
      }
      this.animationData = animation.export()
    },
    // 事件绑定添加按钮
    addFriend(friendId){
      this.friendId = friendId;
      this.addMes = this.name + "请求添加你为好友";
      this.$nextTick(() => {
        this.modify();
      })
    },
    // 发送好友请求
    addFriendSubmit(){
      if(this.addMes.length > 0) {
        this.modify();
        return new Promise ((resolve,reject) => {
          uni.request({
            url:this.$serverUrl + '/friend/applyfriend',
            data: { 
              id: this.id,
              friendId: this.friendId,
              token: this.token,
              content: this.addMes,
            },
            method: 'POST',
            success: (data) => {
              let status = data.data.status;
              console.log(data);
              if (status == 200) {
                uni.showToast({
                  title:'发送成功',
                  icon:'none',
                  duration: 2000,
                })
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
      }
      
    },
    getElementStyle(){
      const query = uni.createSelectorQuery().in(this);
      query.select('.modify').boundingClientRect(addMes => {
        this.widHeight = addMes.height;
      }).exec();
    },
  },
  mounted(){
    this.getStorage()
    this.getElementStyle()
  },
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
.modify {
  position: fixed;
  z-index: 1002;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #fff;
  .modify-header {
    width: 100%;
    height: 88rpx;
    padding-top: var(--status-bar-height);
    display: flex;
    flex-direction:row;
    align-items: center;
    border-bottom: 1px solid $uni-border-color;
    .close {
      padding-left: $uni-spacing-col-base;
      font-size: $uni-font-size-lg;
      color: $uni-text-color;
      line-height: 44rpx;
    }
    .title {
      flex:auto;
      text-align: center;
      font-size: 40rpx;
      color:$uni-text-color;
      line-height: 88rpx;
    }
    .define {
      padding-right: $uni-spacing-col-base;
      font-size: $uni-font-size-lg;
      // color:$uni-text-success;
      line-height: 88rpx;
    }
  }
  .modify-main {
    display: flex;
    padding: $uni-spacing-col-base;
    flex-direction: column;
    .modify-content {
      padding: 16rpx 20rpx;
      box-sizing: border-box;
      flex: auto;
      width: 100%;
      height: 386rpx;
      background: $uni-bg-color-grey;
      border-radius: $uni-border-radius-base;
      font-size: large;
      color: $uni-text-color;
      line-height: 44rpx;
    }
  }
}

</style>