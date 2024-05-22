<template>
  <view class="content">
  <!-- <Head></Head> -->
  <top-bar>
    <template v-slot:left>
      <view class="topbar-left">
        <!-- <image src="../../static/test_imgs/1.jpg"></image> -->
        <navigator :url="'../userinfo/userinfo?id=' + id">
          <image :src="imgurl" class="topbarImage" mode=""></image>
        </navigator>
      </view>
    </template>

    <template v-slot:right>
      <view class="topbar-right">
        <!-- <image src="../../static/test_imgs/2.jpg"></image> -->
        <navigator url="../search/search" class="topbar-signin">搜索</navigator>
      </view>
    </template>
  </top-bar>

  <chat-list></chat-list>
  </view>
</template>

<script>
import Head from '../../components/Head.vue'
import TopBar from '../../components/TopBar.vue';
import ChatList from '../../components/ChatList.vue';
export default {
  name: 'index',
  components: {
    Head,
    ChatList,
    TopBar,
  },
  data() {
    return {
      id:'',
      imgurl: '',
      token:'',
    }
  },
  methods: {
    // 获取登陆页面放入缓存中的个人数据
    getStorage() {
      try {
        const value = uni.getStorageSync('user');
        if(value) {
          this.id = value.id;
          this.imgurl = this.$serverUrl  + value.imgurl;
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
  }
}
</script>

<style lang="scss">
@import "../../commons/css/topbar.scss";

.content {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  padding-top: var(--status-bar-height);
  padding-bottom: $uni-spacing-col-base;
}

</style>


<!-- 给应用空出手机状态栏的方法： -->
<!-- 给所有的高度加上一个 padding=top: var(--status-bar-height);或者margin -->