import Home from "../views/Home.vue";
export default [
  {
    path: "/",
    name: "home",
    meta: {
      title: "首页",
      keepAlive: true
    },
    component: Home
  },
  {
    path: "/button",
    name: "button",
    meta: {
      title: "按钮",
      type: "basic",
      keepAlive: true
    },
    component: () => import("../views/basic/button.vue")
  },
  {
    path: "/svgicon",
    name: "svgicon",
    meta: {
      title: "图标",
      type: "basic",
      keepAlive: true
    },
    component: () => import("../views/basic/svgicon.vue")
  },
  {
    path: "/longlist",
    name: "longlist",
    meta: {
      title: "长列表",
      type: "view",
      keepAlive: true
    },
    component: () => import("../views/view/longlist.vue")
  }
];
