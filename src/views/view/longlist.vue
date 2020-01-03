<template>
  <div class="yf-long-list">
    <yf-long-list :list="list"></yf-long-list>
  </div>
</template>

<script>
import YfLongList from "components/LongList/LongList.vue";
import list from "./data";
export default {
  components: {
    YfLongList
  },
  data() {
    return {
      list
    };
  }
};
</script>

<style lang="scss" scoped>
.yf-long-list {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
