import { $t } from "@/plugins/i18n";
import { tuijian } from "@/router/enums";
export default {
  path: "/tuijian",
  redirect: "/tuijian/index",
  meta: {
    icon: "ep:add-location",
    title: $t("menus.hstuijian"),
    rank: tuijian
  },
  children: [
    {
      path: "/tuijian/index",
      name: "RegionTuijian",
      component: () => import("@/views/tuijian/index.vue"),
      meta: {
        title: $t("menus.hstuijian")
      }
    }
  ]
} satisfies RouteConfigsTable;
