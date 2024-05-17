<script setup lang="ts">
import { ref, computed } from "vue";
import { useDark, useECharts } from "@pureadmin/utils";

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
      name: "出行总量",
      type: "pie",
      top: "22%",
      radius: "75%",
      center: ["46%", "46%"],
      color: [ "#f56c6c", "#53a7ff",'#26ce83','#7846e5','#d1392b', "gray"],
      data: [
        
        { value: 1600, name: "河南省" },
        { value: 720, name: "浙江省" },
        { value: 400, name: "山东省" },
        { value: 1200, name: "江苏省" },
        { value: 2200, name: "山西省" },
        { value: 400, name: " 其他 " }
      ]
    }
  ]
});
</script>

<template>
  <div ref="pieChartRef" style="width: 100%; height: 50vh" />
</template>
