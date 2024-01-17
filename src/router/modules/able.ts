import { $t } from "@/plugins/i18n";
import { able } from "@/router/enums";
const IFrame = () => import("@/layout/frameView.vue");
export default {
  path: "/able",
  redirect: "/able/watermark",
  meta: {
    icon: "ubuntuFill",
    title: $t("menus.hsAble"),
    rank: able
  },
  children: [
    {
      path: "/able/watermark",
      name: "WaterMark",
      component: () => import("@/views/able/watermark.vue"),
      meta: {
        title: $t("menus.hsWatermark")
      }
    },
    {
      path: "/able/print",
      name: "Print",
      component: () => import("@/views/able/print/index.vue"),
      meta: {
        title: $t("menus.hsPrint")
      }
    },
    {
      path: "/able/excel",
      name: "Excel",
      component: () => import("@/views/able/excel.vue"),
      meta: {
        title: $t("menus.hsExcel")
      }
    },
    {
      path: "/able/map",
      name: "MapPage",
      component: () => import("@/views/able/map.vue"),
      meta: {
        title: $t("menus.hsmap"),
        keepAlive: true,
        transition: {
          name: "fade"
        }
      }
    },
    {
      path: "/board/index",
      name: "FrameBoard",
      component: IFrame,
      meta: {
        title: $t("menus.hsboard"),
        frameSrc: "https://songlh.top/paint-board/",
        // extraIcon: "IF-pure-iconfont-new svg"
      }
    }
  ]
} satisfies RouteConfigsTable;
