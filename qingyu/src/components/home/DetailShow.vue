<template>
  <div class="show">
    <div class="online-tips">
      <span class="icon"></span>
      <span class="text">{{info.status}}</span>
    </div>
    <div class="avatar-w">
      <img :src="info.avatar" alt />
    </div>
    <p class="nick">{{info.nick}}</p>
    <p class="user-info">
      <span>{{info.age}}</span>
      <span>{{info.city}}</span>
      <span>天秤座</span>
    </p>
    <p class="make-friend" @click="makeFriend"></p>
    <p :class="{'btn':true,'play':isPlay}" @click="changePlay"></p>
  </div>
</template>
<script>
export default {
  props:['info'],
  data() {
    return {
      isPlay: false
    };
  },
  methods: {
    changePlay() {

      this.isPlay = !this.isPlay;
    },
    makeFriend(){
      this.$toast({message:'好友请求已发送',background:'#E1A75E linear-gradient(0deg,rgba(247,183,64,0.26),rgba(255,219,110,0.26))'})
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/global.scss";
.show {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3rem;
  z-index:3;
  // border: $b;

  .online-tips {
    position: absolute;
    left: 0.32rem;
    top: 0rem;
    text-align: center;
    padding: 0rem 0.1rem;
    min-width: 1.82rem;
    height: 0.53rem;
    background: url(~@/assets/img/bg_zaixian.png) 0/100% 100% no-repeat;
    .text {
      font-size: 0.22rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      margin-left: 0.1rem;
      vertical-align: middle;
    }
    .icon {
      display: inline-block;
      vertical-align: middle;

      width: 0.19rem;
      height: 0.19rem;
      background: url(~@/assets/img/ic_zaixian.png) 0/100% no-repeat;
    }
  }
  .avatar-w {
    position: absolute;
    top: 0.65rem;
    left: 0.34rem;
    width: 0.72rem;
    height: 0.72rem;
    background: rgba(0, 0, 0, 1);
    border: 0.02rem solid rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    img {
      width: 0.72rem;
      height: 0.72rem;
      border-radius: 50%;
    }
  }
  .nick {
    position: absolute;
    top: 0.8rem;
    left: 1.31rem;
    font-size: 0.4rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }
  .user-info {
    position: absolute;
    top: 1.3rem;
    left: 1.1rem;

    span {
      font-size: 0.22rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      margin-left: 0.22rem;
    }
  }
  .make-friend {
    position: absolute;
    top: 0.8rem;
    right: 0.1rem;
    width: 1.92rem;
    height: 0.8rem;
    background: url(~@/assets/img/+.png) 0/100% no-repeat;
  }
  .btn {
    position: absolute;
    top: -0.5rem;
    right: 0.35rem;
    width: 0.72rem;
    height: 0.72rem;
    background: url(~@/assets/img/btn_stop.png) 0/100% no-repeat;
    &.play {
      background: url(~@/assets/img/btn_play.png) 0/100% no-repeat;
    }
  }
}
</style>