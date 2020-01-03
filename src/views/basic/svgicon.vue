<template>
  <Page>
    <div class="svgicon">
      <div class="svgicon-box">
        <div class="title">基础用法</div>
        <div class="svgicon-row">
          <yf-svg-icon name="load-c"></yf-svg-icon>
          <yf-svg-icon name="load-f"></yf-svg-icon>
          <yf-svg-icon name="arrow-right"></yf-svg-icon>
          <yf-svg-icon name="message"></yf-svg-icon>
        </div>
      </div>
      <div class="svgicon-box">
        <div class="title">修改颜色</div>
        <div class="svgicon-row">
          <yf-svg-icon name="load-c" color="red"></yf-svg-icon>
          <yf-svg-icon name="load-f" color="blue"></yf-svg-icon>
        </div>
      </div>
      <div class="svgicon-box">
        <div class="title">修改大小</div>
        <div class="svgicon-row">
          <yf-svg-icon name="arrow-right" size="20"></yf-svg-icon>
          <yf-svg-icon name="message" size="2em"></yf-svg-icon>
        </div>
      </div>
      <div class="svgicon-box">
        <div class="title">提示信息</div>
        <div class="svgicon-row">
          <yf-svg-icon name="message" size="1em" dot></yf-svg-icon>
          <yf-svg-icon name="message" size="2em" info="10"></yf-svg-icon>
          <yf-svg-icon name="message" size="2em" info="1000"></yf-svg-icon>
        </div>
      </div>
    </div>
  </Page>
</template>

<script>
import YfSvgIcon from "components/SvgIcon/SvgIcon.vue";
export default {
  name: "SvgIconView",
  components: {
    YfSvgIcon
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.svgicon-box {
  margin-top: 16px;
  .title {
    font-size: 16px;
    color: rgba(69, 90, 100, 0.6);
    text-align: left;
  }
  .svgicon-row {
    display: flex;
    flex-wrap: wrap;
    & > :not(:last-child) {
      margin-right: 10px;
    }
    & > * {
      margin-top: 16px;
    }
  }
}
</style>
