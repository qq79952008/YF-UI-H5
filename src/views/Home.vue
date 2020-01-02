<template>
  <Page>
    <template slot="title">
      <div class="title">YF-UI-H5</div>
    </template>
    <div class="home">
      <div
        class="components-list"
        v-for="(list, listIndex) in componentsList"
        :key="listIndex"
        v-show="listTitleMap.get(list).list.length"
      >
        <div class="list-title">{{ listTitleMap.get(list).title }}</div>
        <ul class="list">
          <li
            class="list-item"
            v-for="(item, index) in listTitleMap.get(list).list"
            :key="index"
            @click="goComponentView(item)"
          >
            <span>{{ `${item.name}${item.meta.title}` }}</span>
            <yf-svg-icon name="arrow-right"></yf-svg-icon>
          </li>
        </ul>
      </div>
    </div>
  </Page>
</template>

<script>
// @ is an alias to /src
import RouteList from "@/router/routeList.js";
import YfSvgIcon from "components/SvgIcon/SvgIcon";
export default {
  name: "home",
  components: { YfSvgIcon },
  data() {
    return {
      componentsList: [
        "basic",
        "form",
        "feedback",
        "view",
        "navigation",
        "business"
      ],
      basicComponents: [],
      formComponents: [],
      feedbackComponents: [],
      viewComponents: [],
      navigationComponents: [],
      businessComponents: [],
      listTitleMap: null
    };
  },
  created() {
    this.getComponents();
  },
  methods: {
    getComponents() {
      RouteList.forEach(item => {
        if (item.meta) {
          switch (item.meta.type) {
            case "basic":
              this.basicComponents.push(item);
              break;
            case "form":
              this.formComponents.push(item);
              break;
            case "feedback":
              this.feedbackComponents.push(item);
              break;
            case "view":
              this.viewComponents.push(item);
              break;
            case "navigation":
              this.navigationComponents.push(item);
              break;
            case "business":
              this.businessComponents.push(item);
              break;
          }
        }
      });
      let titleMap = new Map();
      titleMap.set("basic", {
        title: "基础组件",
        key: "basicComponents",
        list: [...this.basicComponents]
      });
      titleMap.set("form", {
        title: "表单组件",
        key: "formComponents",
        list: [...this.formComponents]
      });
      titleMap.set("feedback", {
        title: "反馈组件",
        key: "feedbackComponents",
        list: [...this.feedbackComponents]
      });
      titleMap.set("view", {
        title: "展示组件",
        key: "viewComponents",
        list: [...this.viewComponents]
      });
      titleMap.set("navigation", {
        title: "导航组件",
        key: "navigationComponents",
        list: [...this.navigationComponents]
      });
      titleMap.set("business", {
        title: "业务组件",
        key: "businessComponents",
        list: [...this.businessComponents]
      });
      this.listTitleMap = titleMap;
    },
    goComponentView(component) {
      this.$router.push({
        path: component.path
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  text-align: left;
  .title {
    margin-top: 10px;
    font-size: 24px;
    font-weight: 700;
  }
  .components-list {
    margin-top: 20px;
    .list-title {
      font-weight: 500;
    }
    .list {
      list-style-type: none;
      padding: 0;
      .list-item {
        margin: 10px 0;
        height: 40px;
        border-radius: 20px;
        background: #eeeeee;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        cursor: pointer;
        &:hover {
          background: #f7f8fa;
        }
      }
    }
  }
}
</style>
