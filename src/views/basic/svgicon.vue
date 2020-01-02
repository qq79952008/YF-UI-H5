<template>
  <Page>
    <div class="svgicon">
      <yf-svg-icon name="load-c"></yf-svg-icon>
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
  created() {
    console.log(1);
  }
};
</script>

<style lang="scss" scoped>
.svgicon {
  color: red;
}
</style>
