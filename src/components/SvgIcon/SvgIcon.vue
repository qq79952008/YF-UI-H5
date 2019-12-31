<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: "yf-svg-icon",
  props: {
    name: {
      type: String,
      required: true
    }
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
    }
  }
};
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
