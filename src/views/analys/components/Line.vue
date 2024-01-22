<script setup lang="ts">
import { type PropType, ref, computed } from "vue";
import { useDark, useECharts } from "@pureadmin/utils";
import { debug } from "console";

const props = defineProps({
   data1: {
      type: Array as PropType<Array<number>>,
      default: () => {}
   },
   data2: {
      type: Array as PropType<Array<number>>,
      default: () => {}
   },
   data3: {
      type: Array as PropType<Array<number>>,
      default: () => {}
   },
   data4: {
      type: Array as PropType<Array<number>>,
      default: () => {}
   },
   data5: {
      type: Array as PropType<Array<number>>,
      default: () => {}
   },
   data6: {
      type: Array as PropType<Array<number>>,
      default: () => {}
   }
});

const { isDark } = useDark();

const theme = computed(() => (isDark.value ? "dark" : "light"));

const chartRef = ref();
const { setOptions } = useECharts(chartRef, {
   theme,
   renderer: "svg"
});

setOptions({
   container: ".line-card",
   tooltip: {
      trigger: 'axis'
   },
   animationDuration: 1000,
   xAxis: {
      type: "category",
      show: true,
      data: ['3.6', '3.7', '3.8', '3.9', '3.10', '3.11', '3.12']
   },
   legend: {
      data: [props.data1['name'], props.data2['name'], props.data3['name'], props.data4['name'], props.data5['name'], props.data6['name']]
   },
   grid: {
      top: "15%",
      bottom: "10%",
      left: "15%",
      right: "10%",
      containLabel: true
   },
   yAxis: {
      show: true,
      type: "value"
   },
   series: [
      {
         name: props.data1['name'],
         data: props.data1['data'],
         type: "line",
         symbol: "none",
         smooth: true,
         color: "#e6a23c",
         lineStyle: {
            shadowOffsetY: 3,
            shadowBlur: 7,
            shadowColor: "#e6a23c"
         }
      },
      {
         name: props.data2['name'],
         data: props.data2['data'],
         type: "line",
         symbol: "none",
         smooth: true,
         color: "#f56c6c",
         lineStyle: {
            shadowOffsetY: 3,
            shadowBlur: 7,
            shadowColor: "#f56c6c"
         }
      },
      {
         name: props.data3['name'],
         data: props.data3['data'],
         type: "line",
         symbol: "none",
         smooth: true,
         color: "#53a7ff",
         lineStyle: {
            shadowOffsetY: 3,
            shadowBlur: 7,
            shadowColor: "#53a7ff"
         }
      },
      {
         name: props.data4['name'],
         data: props.data4['data'],
         type: "line",
         symbol: "none",
         smooth: true,
         color: "#26ce83",
         lineStyle: {
            shadowOffsetY: 3,
            shadowBlur: 7,
            shadowColor: "#26ce83"
         }
      },
      {
         name: props.data5['name'],
         data: props.data5['data'],
         type: "line",
         symbol: "none",
         smooth: true,
         color: "#7846e5",
         lineStyle: {
            shadowOffsetY: 3,
            shadowBlur: 7,
            shadowColor: "#7846e5"
         }
      },
      {
         name: props.data6['name'],
         data: props.data6['data'],
         type: "line",
         symbol: "none",
         smooth: true,
         color: "#d1392b",
         lineStyle: {
            shadowOffsetY: 3,
            shadowBlur: 7,
            shadowColor: "#d1392b"
         }
      }
   ]
});
</script>

<template>
   <div ref="chartRef" style="width: 1200px; height: 380px" />
</template>
