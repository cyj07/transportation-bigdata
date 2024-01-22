<script setup lang="ts">
import { ref, computed } from "vue";
import { useDark, useECharts } from "@pureadmin/utils";
import { chartData} from "./data";

const { isDark } = useDark();

const theme = computed(() => (isDark.value ? "dark" : "light"));

const pieChartRef = ref();
const { setOptions } = useECharts(pieChartRef, {
   theme
});

setOptions({
   tooltip: {
      trigger: "item"
   },
   legend: {
      icon: "circle",
      //@ts-expect-error
      right: true
   },
   series: [
      {
         name: "热点区域",
         type: "pie",
         top: "5%",
         radius: "75%",
         center: ["50%", "50%"],
         color: ["#e6a23c", "#f56c6c", "#53a7ff", '#26ce83', '#7846e5', '#d1392b'],
         data: chartData
      }
   ]
});
</script>

<template>
   <div ref="pieChartRef" style="width: 100%; height: 50vh" />
</template>
