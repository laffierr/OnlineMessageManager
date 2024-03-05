<template>

  <view class="topbar">
    <!-- 左侧插槽，用于显示返回键等 -->
    <slot name="left"></slot>

    <!-- 中间插槽，用于显示页面标题或搜索栏 -->
    <slot name="center"></slot>

    <!-- 右侧插槽，用于显示关闭键等 -->
    <slot name="right"></slot>
  </view>

</template>

<script>
export default {
  name: 'TopBar',
  props: {

    // 左侧按钮类型
    leftEleType: {
      type: String,
      required: true,
    },
    // 右侧按钮类型
    rightELeType: {
      type: String,
      required: true,
    },
  },

};
</script>

<style lang="scss">
.topbar {
  position: fixed;
  z-index: 1001;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100rpx;
  padding-top: var(--status-bar-height);
  // 空出手机状态栏的解决方案
  background:$uni-bg-color;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);

//   .topbar-left {
//     float: left;
//     image {
//       margin-top: 20rpx;
//       width: 60rpx;
//       height: 60rpx;
//       border-radius: 16rpx;
//       margin-left: $uni-spacing-col-lg;
//     }
//   }
  
//   .topbar-right {
//     float: right;
//     image {
//       margin-top: 20rpx;
//       width: 60rpx;
//       height: 60rpx;
//       border-radius: 16rpx;
//       margin-right: $uni-spacing-col-lg;

//     }
//   }
}

// .topbar {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: #333;
//   color: #fff;
//   padding: 10px;
// }

</style>
