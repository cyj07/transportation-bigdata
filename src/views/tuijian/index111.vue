<script setup lang="ts">
import { ref, markRaw } from "vue";
import ReCol from "@/components/ReCol";
import { useDark, randomGradient } from "@/views/welcome/utils";
import PureTable from "./components/table/index.vue";
import { ReNormalCountTo } from "@/components/ReCountTo";
import { useRenderFlicker } from "@/components/ReFlicker";
import lineChart from "./components/Line.vue";
import pieChart from "@/views/components/able/print/pieChart.vue";
import Segmented, { type OptionsType } from "@/components/ReSegmented";

import {
   provinceAndCityDataPlus,
   provinceAndCityData,
   convertTextToCode,
   regionDataPlus,
   regionData,
   CodeToText
} from "@/utils/chinaArea";

defineOptions({
   name: "Tuijian"
});

const { isDark } = useDark();

let curWeek = ref(0);
const optionsBasis: Array<OptionsType> = [
   {
      label: "3.6"
   },
   {
      label: "3.7"
   },
   {
      label: "3.8"
   },
   {
      label: "3.9"
   },
   {
      label: "3.10"
   },
   {
      label: "3.11"
   },
   {
      label: "3.12"
   }
];
const selectedOptions1 = ref(["110000", "110100"]);
const selectedOptions2 = ref(["120000", "120100", "120101"]);
const selectedOptions3 = ref(["130000", ""]);
const selectedOptions4 = ref(["120000", "120100", ""]);

const handleChange = value => {
   console.log(value);
};
</script>

<template>
   <div>
      todo
   </div>
</template>

<style lang="scss" scoped>
:deep(.el-card) {
   --el-card-border-color: none;

   /* 解决概率进度条宽度 */
   .el-progress--line {
      width: 85%;
   }

   /* 解决概率进度条字体大小 */
   .el-progress-bar__innerText {
      font-size: 15px;
   }

   /* 隐藏 el-scrollbar 滚动条 */
   .el-scrollbar__bar {
      display: none;
   }

   /* el-timeline 每一项上下、左右边距 */
   .el-timeline-item {
      margin: 0 6px;
   }
}

.main-content {
   margin: 20px 20px 0 !important;
}
</style>
