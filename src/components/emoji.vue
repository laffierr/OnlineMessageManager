<template>
  <view class="emoji" :style="{height:height + 'px'}">
    <view class="emoji-line" v-for="(line,i) in emoji" :key="i">
        <view class="emoji-line-item" v-for="(item,index) in line" :key="index" @tap = 'chooseEmoji(item)'>
            {{ item }}
        </view>
    </view>
  </view>
</template>

<script>
export default {        
    props: {
        height: {
            type: Number,
            default: 230
        }
    },
    data() {
        return {
            emoji: [
                ['😀','😁','😂','🤣','😃','😄','😅','😆'],
                ['😉','😊','😋','😎','😍','😘','😣','😙'],
                ['🙂','🤗','🤔','😐','😑','😶','🙄','😏'],
                ['😥','😮','🤐','😪','😫','😴','😛','🤤'],
                ['😓','🙃','😲','🤑','🙁','😖','😤','😳'],
                ['😭','😦','😧','😨','😩','😰','😱','🤧'],
                ['😵','😠','😡','😷','🤒','🤕','🤢','🤓'],
                ['😇','🤡','😈','👿','👹','💀','👻','🤖'],
                ['👂','👃','👽','😺','😻','🙀','😿','😾'],
                ['👣','👀','👅','👄','💋','💩','🚶','🏃'],
                ['💃','🕺','👓','👑','🎒','🎩','🎓','💼'],
                ['👈','👉','☝','👆','🖕','👇','✌','🤞'],
                ['🖖','🤘','🤙','🖐','✋','🤚','👍','👎'],
                ['👌','👋','👐','🙌','🙏','🤝','🐵','🐒'],
                [,'🙈','🙉','🙊','🦍','🐶','🐺','🦊','🐱']
                // ['💨','💥','💦'],
                ['🦁','🐯','🐴','🦄','🐮','🐷','🐭','🐹'],
                ['🐔','🐰','🐸','🐸','🐲','🐍','🐳','🐬'],
                ['🌚','🌛','🌜','🌝','🌞','⭐','☁️','⛅'],
                ['🌈','⚡','🔥','💧','🌊','🍺','🥂','🌐']
            ]
        }
    },
    methods: {
        chooseEmoji(item) {
            this.$emit('chooseEmoji', item)
        },
    }
}
</script>

<style lang="scss">
.emoji {
    width: 100%;
    padding: 16rpx 10rpx 160rpx 10rpx;
    box-sizing: border-box;
    overflow: hidden;
    overflow-y: auto;
    .emoji-line{
        display: flex;
        .emoji-line-item{
            flex: 1;
            text-align: center;
            font-size: 40rpx;
            line-height: 72rpx;
        }
    }
}
</style>