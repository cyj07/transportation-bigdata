import { $t } from "@/plugins/i18n";
import { components } from "@/router/enums";

export default {
  path: "/components",
  redirect: "/components/dialog",
  meta: {
    icon: "menu",
    title: $t("menus.hscomponents"),
    rank: components
  },
  children: [
    {
      path: "/components/dialog",
      name: "DialogPage",
      component: () => import("@/views/components/dialog/index.vue"),
      meta: {
        title: $t("menus.hsdialog"),
        extraIcon: "IF-pure-iconfont-new svg"
      }
    },
    {
      path: "/components/message",
      name: "Message",
      component: () => import("@/views/components/message.vue"),
      meta: {
        title: $t("menus.hsmessage")
      }
    },
    {
      path: "/components/iconSelect",
      name: "IconSelect",
      component: () => import("@/views/components/icon-select.vue"),
      meta: {
        title: $t("menus.hsIconSelect")
      }
    },
    {
      path: "/components/segmented",
      name: "Segmented",
      component: () => import("@/views/components/segmented.vue"),
      meta: {
        title: $t("menus.hssegmented"),
        extraIcon: "IF-pure-iconfont-new svg"
      }
    },
    {
      path: "/components/cascader",
      name: "Cascader",
      component: () => import("@/views/components/cascader.vue"),
      meta: {
        title: $t("menus.hsCascader")
      }
    },
    {
      path: "/components/timeline",
      name: "TimeLine",
      component: () => import("@/views/components/timeline.vue"),
      meta: {
        title: $t("menus.hsTimeline")
      }
    },
    {
      path: "/components/countTo",
      name: "CountTo",
      component: () => import("@/views/components/count-to.vue"),
      meta: {
        title: $t("menus.hscountTo")
      }
    },
    {
      path: "/components/contextmenu",
      name: "ContextMenu",
      component: () => import("@/views/components/contextmenu/index.vue"),
      meta: {
        title: $t("menus.hscontextmenu")
      }
    },
    {
      path: "/components/seamlessScroll",
      name: "SeamlessScroll",
      component: () => import("@/views/components/seamless-scroll.vue"),
      meta: {
        title: $t("menus.hsseamless")
      }
    },
    {
      path: "/components/button",
      name: "ButtonPage",
      component: () => import("@/views/components/button.vue"),
      meta: {
        title: $t("menus.hsbutton")
      }
    }
  ]
} satisfies RouteConfigsTable;
