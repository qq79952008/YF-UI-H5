<template>
  <div class="button-row">
    <button class="yf-button">yf-h5-button</button>
  </div>
</template>

<script>
export default {
  name: "yf-h5-button",
  props: {
    type: {
      type: String,
      default: "default"
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
}
button:active {
  border-style: none;
}
</style>
