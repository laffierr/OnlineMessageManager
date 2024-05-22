<template>
	<view class="top-bar">
		<view class="top-bar-left">
			<image src="../static/test_imgs/1.jpg" mode=""></image>
		</view>
		<view class="top-bar-right">
			<view class="search">
				<image src="../static/test_imgs/2.jpg" mode=""></image>
			</view>
			
			<view class="append">
				<image src="../static/test_imgs/3.jpg" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	
export default {
	name: 'Head',
	data(){
		return {

		}
	},
	methods: {
		
	}
}
	
</script>

<style lang="scss">
	.top-bar {
		position: fixed;
		z-index: 1001;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100rpx;
		// box-sizing: border-box;
		padding-top: var(--status-bar-height);
		// 空出手机状态栏的解决方案
		background:$uni-bg-color;
		box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
		// border-bottom: uni-bg-color-grey;
		// padding-left: $uni-spacing-col-lg;s
		// padding-left: 16rpx;
		// padding-right: $uni-spacing-col-sm;
			
		.top-bar-left {
			float: left;
			image {
				margin-top: 15rpx;
				width: 70rpx;
				height: 70rpx;
				border-radius: 16rpx;
				margin-left: $uni-spacing-col-lg;

			}
		}
		
		.top-bar-right {
			float: right;
			// padding-right: 14rpx;
			// margin-right: $uni-spacing-col-lg;

			.search {
				height: 100rpx;
				width: 100rpx;
				display: inline-block;
				// margin-right: 5rpx;
			}
			.append {
				height: 100rpx;
				width: 100rpx;
				display: inline-block;
			}
			image {
				// padding: 18rpx;
				margin-top: 20rpx;
				width: 60rpx;
				height: 60rpx;
				border-radius: 16rpx;
			}
		}
	}
</style>