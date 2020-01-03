<template>
  <div class="yf-svg-icon">
    <svg
      :style="
        `fill: ${
          color ? color : 'currentColor'
        };width: ${sizeStr};height: ${sizeStr};`
      "
      aria-hidden="true"
    >
      <use :xlink:href="iconName"></use>
    </svg>
    <div
      class="dot"
      :style="
        `width: ${sizeStr};height: ${sizeStr};top:-${sizeStr};right:-${sizeStr};`
      "
      v-if="dot"
    ></div>
    <div
      :class="`info ${infoMore ? 'info-more' : ''}`"
      :style="`font-size:${sizeStr};top:-${sizeStr};right:-${sizeStr};`"
      v-if="!dot && infoNum"
    >
      {{ infoNum }}
    </div>
  </div>
</template>

<script>
export default {
  name: "yf-svg-icon",
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String
    },
    dot: {
      type: Boolean,
      default: false
    },
    info: {
      type: String
    },
    size: {
      type: String
    }
  },
  data() {
    return {
      infoMore: false,
      infoNum: ""
    };
  },
  computed: {
    iconName() {
      let icon;
      try {
        icon = require(`@/assets/icons/${this.name}.svg`);
        if (Object.prototype.hasOwnProperty.call(icon, "default")) {
          icon = icon.default;
        }
      } catch (err) {
        console.error(`没有icon：${this.name}!`);
      }
      if (icon) return `#${icon.id}`;
      return "";
    },
    sizeStr() {
      if (this.size) {
        if (/^(\d|\.)+$/.test(this.ize)) {
          return `${this.size}px`;
        }
        return this.size;
      }
      return "1em";
    }
  },
  watch: {
    info: {
      handler(info) {
        console.log("info", info);
        if (info) {
          let num = parseInt(info);
          if (num > 99) {
            this.infoMore = true;
            this.infoNum = "99+";
          } else {
            this.infoMore = false;
            this.infoNum = num;
          }
        }
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss" scoped>
.yf-svg-icon {
  position: relative;
  & > svg {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    overflow: hidden;
  }
  .dot {
    position: absolute;
    background: red;
    transform: scale(0.5, 0.5) translate(-60%, 60%);
    border-radius: 50%;
  }
  .info {
    position: absolute;
    background: red;
    color: #fff;
    transform: scale(0.3, 0.3) translate(-340%, 300%);
    border-radius: 50%;
    padding: 1px 2px;
    &.info-more {
      transform: scale(0.3, 0.3) translate(-180%, 300%);
    }
  }
}
</style>
