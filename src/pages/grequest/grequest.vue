<template>
    <view>
        <top-bar>
            <template v-slot:left>
                <view class="topbar-left">
                    <i class="iconfont icon-arrow-left-bold"></i>
                </view>
            </template>
            <template v-slot:center>
                <view class="topbar-center">
                    <span>准入请求</span>
                </view>
            </template> 
        </top-bar>

        <view class="main">
            <!-- 循环体 -->

            <view class="list" v-for="item in requestList" :key="item.id">
                <view class="info head">
                    <!-- <view class="title">头像</view> -->
                    <view class="head">
                        <!-- <img src="../../static/test_imgs/10.jpg" mode="widthFix" alt="用户头像" @click="select"/> -->
                        <img :src="item.url" mode="widthFix" alt="用户头像" @click="select"/>
                    </view>
                    <view class="name">
                        <!-- woSun -->
                        {{ item.name }}
                    </view>
                    <view class="letin">
                        <!-- <i class="iconfont icon-arrow-right-bold"></i> -->
                        <div class="pushable true">
                            <span class="shadow"></span>
                            <span class="edge"></span>
                            <span class="front">批准</span>
                        </div>
                        <div class="pushable false">
                            <span class="shadow"></span>
                            <span class="edge"></span>
                            <span class="front">拒绝</span>
                        </div>
                    </view>
                </view>
            </view>


        </view>
    </view>
</template>

<script>
    import { View } from '@dcloudio/uni-h5';
    // import TopBar from  '../../components/TopBar.vue';
    import TopBar from "../../components/TopBar.vue";

    import datas from "../../commons/js/datas.js";
    import { ref, onMounted } from "vue";

    export default {
        components: {
            TopBar,
            View,
        },
        setup() {
            // 先创建一个接受信息的响应式变量
            const requestList = ref([]);

            // const components = {
            //     TopBar,
            //     View 
            // };

            const urlResolve = (imgurl) => {
                // 模板字符串 将变量插入字符串
                return `../../static/test_imgs/${imgurl}`;
            };

            const getinfo = () => {
                requestList.value = datas.requestList();

                // 替换对象中的图片地址
                for (let i of requestList.value) {
                    i.imgurl = urlResolve(i.imgurl);
                }
            };

            onMounted (() => {
                getinfo();
            });

            return {
                // components: {
                //     TopBar,
                //     View,
                // },
                requestList,
            };
        },

        onLoad() {
            uni.setNavigationBarTitle({
                title: '群组准入请求',
            });
        },
    }
</script>

<style lang="scss">
    @import '../../commons/css/topbar.scss';

    .main {
        padding-top: var(--status-bar-height);
        padding-top: 112rpx;

        display: flex;
        flex-direction: column;
    }

    .info {
        display: flex;
        height: 148rpx;
        padding: 12rpx $uni-spacing-col-sm 12rpx $uni-spacing-col-base;
        align-items: center;
    
        .head {
            flex: 0;
            display: flex;
            line-height: 112rpx;

            img {
                width: 120rpx;
                height: 120rpx;
                border-radius: $uni-border-radius-base;
                margin: auto 0;
            }
        }

        .name {
            flex: 1;
            margin-left: $uni-spacing-col-base;
            font-size: 40rpx;
            line-height: 112rpx;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .letin {
            flex: 0 0 auto;
            display: flex;
            justify-content: space-between;

            :first-child {
                margin-right: 10rpx;
            }

            .pushable {
                // 因为其背景已经改成透明（此组件背景弃置） 因此圆角也不用设置
                // border-radius: 12rpx;
                border: none;
                padding: 0;
                cursor: pointer;
                outline-offset: 4px;

                position: relative;
                background: transparent;

                transform: filter 600ms;

                // 删除点击后闪烁的灰色矩形
                // -webkit-tap-highlight-color: transparent;
                // 似乎这个特性没有了？

                // 删除用户的长按选择
                user-select: none;
            }
            .shadow {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: 12rpx;
                background: hsl(0deg 0% 0% / 0.25);
                filter: blur(4px);

                // will-change用来提前告知浏览器要改变哪些动画要发生改变，从而优化性能
                will-change: transform;
                transform: translateY(3px);

                transition: transform 600ms cubic-bezier(.3,.7,.4,1);
            }
            .edge {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: 12rpx;
            }

            .front {
                display: block;
                padding: 12rpx 42rpx;
                border-radius: 12rpx;
                font-size: $uni-font-size-base;
                color: white;
                transform: translateY(-7rpx);

                // 鼠标悬停时的设置
                will-change: transform;
                transition: transform 250ms;

                // 贝塞尔曲线控制动画速度
                transition: transform 600ms cubic-bezier(.3,.7,.4,1);

                position: relative;
            }

            // 给这个按钮添加鼠标悬停时微微上浮（手机无效
            // .pushable:hover .front {
            //     transform: translateY(-6px);
            //     transition: transform 600ms cubic-bezier(.3,.7,.4,1.5);
            //     // transition: filter 250ms;
            //     // filter: brightness(110%);
            // }

            // .pushable:hover {
            //     // 整体提亮
            //     filter: brightness(110%);
            // }

            // .pushable:hover .shadow {
            //     transform: translateY(4px);
            //     transition: transform 250ms cubic-bezier(.3,.7,.4,1.5);
            // }

            .pushable:active .front {
                transform: translateY(-1rpx);
                transition: transform 34ms;
            }

            .pushable:active .shadow {
                transform: translateY(2px);
                transition: transform 34ms;
            }



            .true {
                // background: hsl(110, 100%, 18%);
                .edge {
                    background: hsl(110, 100%, 20%);
                }
                .front {
                    background: hsl(115, 100%, 40%);
                }
            }

            .false {
                // background: hsl(340deg, 100%, 32%);
                // 把本来背景颜色搬到edge这来 表示按钮的边缘edge
                .edge {
                    background: hsl(340deg, 100%, 32%);
                }
                .front {
                    background: hsl(345deg, 100%, 47%);
                }
            }
        }
    }


</style>
