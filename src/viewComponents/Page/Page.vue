<template>
  <transition name="slide-fade">
    <div class="page">
      <div class="title" v-if="tittleShow">
        <div @click="goBack" class="back-box" v-if="back">
          <yf-svg-icon name="arrow-right" class="back-icon"></yf-svg-icon>
        </div>
        <span>{{ title }}</span>
      </div>
      <div class="container">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import YfSvgIcon from "components/SvgIcon/SvgIcon";
export default {
  components: {
    YfSvgIcon
  },
  data() {
    return {
      backShow: true,
      title: "",
      tittleShow: true
    };
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    back: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  watch: {
    $route: {
      handler(to) {
        setTimeout(() => {
          this.title = `${to.name}${to.meta.title}`;
          if (to.name === "home") {
            this.tittleShow = false;
            return;
          }
          this.tittleShow = true;
        }, 0);
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  .title {
    height: 40px;
    background: #fff;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
    .back-box {
      left: 0;
      position: absolute;
      display: flex;
      align-items: center;
      width: 40px;
      height: 40px;
      .back-icon {
        transform: rotateY(180deg);
      }
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-enter
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
