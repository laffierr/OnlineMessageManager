<template>
  <view class="content">
  <Head></Head>
  <chat-list></chat-list>
  </view>
</template>

<script>
import Head from '../../components/Head.vue'
import ChatList from '../../components/ChatList.vue';
export default {
  name: 'index',
  components: {
    Head,
    ChatList,
  },
}
</script>

<style lang="scss">
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