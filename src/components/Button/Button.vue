<template>
  <button @click="onClick" :class="`yf-button yf-button--${type}`">
    <slot v-if="!loading" />
    <div class="loading-box" v-else>
      <span class="loading-text">{{ loadingText }}</span>
      <yf-svg-icon class="loading-icon" :name="loadingIcon"></yf-svg-icon>
    </div>
  </button>
</template>

<script>
import YfSvgIcon from "../SvgIcon/SvgIcon";
export default {
  components: {
    YfSvgIcon
  },
  name: "yf-h5-button",
  props: {
    //按钮样式
    type: {
      type: String,
      default: "default"
    },
    //异步
    loading: {
      type: Boolean,
      default: false
    },
    //异步加载文案
    loadingText: {
      type: String,
      default: "加载中"
    },
    //异步加载文案
    loadingIcon: {
      type: String,
      default: "load-c"
    },
    //防抖
    debounce: {
      type: Boolean,
      default: false
    },
    //防抖延迟时间
    debounceTime: {
      type: Number,
      default: 1000
    },
    before: {
      type: Function,
      default: () => true
    }
  },
  data() {
    return {
      //同步防抖定时器
      timer: null,
      //同步防抖延迟时间
      time: 1000
    };
  },
  mounted() {},
  methods: {
    onClick() {
      if (this.loading) return;
      if (this.debounce) {
        this.debounceFunc(this.click);
      } else {
        this.click();
      }
    },
    debounceFunc(func) {
      if (this.timer) return;
      func.call(this);
      this.timer = setTimeout(() => {
        clearTimeout(this.timer);
        this.timer = null;
      }, this.debounceTime);
    },
    async click() {
      let before = await this.before();
      console.log("before", before);
      if (!before) {
        return;
      }
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../style/variable.scss";
.yf-button {
  width: 100px;
  height: 40px;
  border-radius: 4px;
  outline: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    border: inherit;
    border-color: #000;
    border-radius: inherit;
    opacity: 0;
    content: " ";
  }
  &:active::before {
    opacity: 0.1;
  }
  .loading-box {
    display: flex;
    display: flex;
    align-items: center;
    .loading-text {
      margin-right: 5px;
    }
    .loading-icon {
      font-size: 20px;
      animation: rotate-icon 1s linear infinite;
    }
    @keyframes rotate-icon {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
.yf-button--default {
  background: #fff;
  color: #000;
  border: 1px solid #ebedf0;
}
.yf-button--primary {
  background: $color-primary;
  color: #fff;
  border: 1px solid $color-primary;
}
.yf-button--success {
  background: $color-success;
  color: #fff;
  border: 1px solid $color-success;
}
.yf-button--disable {
  background: $color-disable;
  color: #fff;
  border: 1px solid $color-disable;
  &:active::before {
    opacity: 0;
  }
}
.yf-button--danger {
  background: $color-danger;
  color: #fff;
  border: 1px solid $color-danger;
}
button:active {
  border-style: none;
}
</style>
