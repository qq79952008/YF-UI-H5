<template>
  <Page>
    <div class="button-box">
      <div class="title">按钮类型</div>
      <div class="button-row">
        <yf-button>按钮</yf-button>
        <yf-button type="primary">按钮</yf-button>
        <yf-button type="success">按钮</yf-button>
        <yf-button type="disable">按钮</yf-button>
        <yf-button type="danger">按钮</yf-button>
      </div>
    </div>
    <div class="button-box">
      <div class="title">加载状态</div>
      <div class="button-row">
        <yf-button :loading="true" loadingIcon="load-c">按钮</yf-button>
        <yf-button
          type="primary"
          :loading="true"
          loadingIcon="load-f"
          loadingText="载入中"
          >按钮</yf-button
        >
      </div>
    </div>
    <div class="button-box">
      <div class="title">防抖</div>
      <div class="button-row">
        <yf-button type="primary">按钮</yf-button>
        <yf-button type="primary" :debounce="true">防抖按钮</yf-button>
      </div>
    </div>
    <div class="button-box">
      <div class="title">点击前置</div>
      <div class="button-row">
        <yf-button type="primary" :before="before1" @click="click1"
          >前置条件按钮</yf-button
        >
        <yf-button
          type="primary"
          :before="before2"
          :loading="loading"
          @click="click2"
          >异步前置条件按钮</yf-button
        >
      </div>
    </div>
  </Page>
</template>

<script>
import YfButton from "components/Button/Button.vue";
export default {
  components: {
    YfButton
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    before1() {
      return false;
    },
    click1() {
      console.log(1);
    },
    before2() {
      this.loading = true;
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(true);
        }, 3000);
      });
    },
    click2() {
      this.loading = false;
      console.log(2);
    }
  }
};
</script>

<style lang="scss" scoped>
.button-box {
  margin-top: 16px;
  .title {
    font-size: 16px;
    color: rgba(69, 90, 100, 0.6);
    text-align: left;
  }
  .button-row {
    display: flex;
    flex-wrap: wrap;
    & > button:not(:last-child) {
      margin-right: 10px;
    }
    & > button {
      margin-top: 16px;
    }
  }
}
</style>
