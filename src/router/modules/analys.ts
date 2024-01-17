import { $t } from "@/plugins/i18n";
import { analys } from "@/router/enums";
export default {
  path: "/analys",
  redirect: "/analys/index",
  meta: {
    icon: "table",
    title: $t("menus.hsanalys"),
    rank: analys
  },
  children: [
    {
      path: "/analys/index",
      name: "RegionAnalys",
      component: () => import("@/views/analys/index.vue"),
      meta: {
        title: $t("menus.hsanalys")
      }
    }
  ]
} satisfies RouteConfigsTable;
