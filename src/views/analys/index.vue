<script setup lang="ts">
import { ref, markRaw } from "vue";
import ReCol from "@/components/ReCol";
import { useDark, randomGradient } from "@/views/welcome/utils";
import PureTable from "@/views/welcome/components/table/index.vue";
import { ReNormalCountTo } from "@/components/ReCountTo";
import { useRenderFlicker } from "@/components/ReFlicker";
// import lineChart from "./components/Line.vue";
// import pieChart from "@/views/components/able/print/pieChart.vue";
import Segmented, { type OptionsType } from "@/components/ReSegmented";
import {tableData } from "@/views/welcome/data";
// import redian from "./redian.vue"
// import { latestNewsData } from "./data"
import {
provinceAndCityDataPlus,
provinceAndCityData,
convertTextToCode,
regionDataPlus,
regionData,
CodeToText
} from "@/utils/chinaArea";

defineOptions({
name: "Analys"
});

const { isDark } = useDark();

let curWeek = ref(0); 
const data = ref(tableData)
const optionsBasis: Array<OptionsType> = [
{
  label: "全部"
},
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
const selectedOptions3 = ref(["", ""]);
const shaixuan = () => {
let code = selectedOptions3.value[1];
if (!code) {
  code = selectedOptions3.value[0];
}
let filteredArray = []
if (code) {
  tableData.forEach(item => {
  if (item.qqhbm == code || item.zqhbm == code) {
    filteredArray.push(item)
  }
})
}
else {
  filteredArray = tableData
}
  if (curWeek.value != 0) {
  let vv = curWeek.value + 5;
    let filteredArray1 = [];
    filteredArray.forEach(item => {
      if (new Date(item.qstime).getDate() == vv || new Date(item.zztime).getDate() == vv) {
        filteredArray1.push(item)
      }
    })
    data.value = filteredArray1
  }
  else {
  data.value = filteredArray
}

}
const handleChange = value => {

if (value.length === 1) {
  selectedOptions3.value = [value[0],""]
  // 全部数据
  data.value = tableData
}
else {
  selectedOptions3.value = [value[0], value[1]]
}
shaixuan();

};
const changeTime = value => {
  shaixuan();
}
</script>

<template>
<div>
<!-- <el-card shadow="never">
  <el-row :gutter="24" justify="space-around">
    <re-col
          v-motion
          class="mb-[12px]"
          :value="12"
          :xs="24"
          :initial="{
            opacity: 0,
            y: 100
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 480
            }
          }"
        >
    
          <el-card shadow="never">
            <div class="flex justify-between">
              <span class="text-md font-medium">热点区域</span>
            </div>
            <redian class="echart mt-[12px]" />
          </el-card>
        </re-col>
        <re-col
        v-motion
        class="mb-[12px]"
        :value="12"
        :xs="24"
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 400
          }
        }"
      >
        <el-card class="line-card" shadow="never">
        <div class="flex justify-between">
                <span class="text-md font-medium">区域流量</span>
              </div>
          <div class="flex justify-between items-start mt-3">
            <lineChart
              
              :data1="latestNewsData.data1"
              :data2="latestNewsData.data2"
              :data3="latestNewsData.data3"
              :data4="latestNewsData.data4"
              :data5="latestNewsData.data5"
              :data6="latestNewsData.data6"
            />
          </div>
        </el-card>
        </re-col>
  </el-row> 
</el-card> -->
<el-row :gutter="24" justify="space-around">
  <re-col
      v-motion
      class="mb-[18px]"
      :value="24"
      :xs="24"
      :initial="{
        opacity: 0,
        y: 100
      }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          delay: 560
        }
      }"
    >
<el-card shadow="never">
  <el-row :gutter="24" justify="space-around">
    
        <re-col
          v-motion
          class="mb-[18px]"
          :value="12"
          :xs="24"
          :initial="{
            opacity: 0,
            y: 100
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 400
            }
          }"
        >
        <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
        <div class="flex flex-col items-center justify-center mt-3">
          <span class="text-[var(--el-color-primary)]">
            <el-cascader
              v-model="selectedOptions3"
              :options="provinceAndCityDataPlus"
              @change="handleChange"
            />
          </span>
          <div class="leading-10">
            <div>绑定值：{{ selectedOptions3 }}</div>
            <div>
              区域码转汉字：
              {{ CodeToText[selectedOptions3[0]] }},
              {{ CodeToText[selectedOptions3[1]] }}
            </div>
            <div>
              汉字转区域码：
              {{
                convertTextToCode(
                  CodeToText[selectedOptions3[0]],
                  CodeToText[selectedOptions3[1]]
                )
              }}
            </div>
          </div>
        </div>
      </el-col>
      </re-col>
        <re-col
          v-motion
          class="mb-[18px]"
          :value="12"
          :xs="24"
          :initial="{
            opacity: 0,
            y: 100
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 480
            }
          }"
        >
        <div class="flex flex-col items-center justify-center mt-3">
                <span class="text-[var(--el-color-primary)]">
                  时间选择：
                  <Segmented v-model="curWeek" :options="optionsBasis" @change="changeTime"/>
                </span>
              </div>
      
      </re-col>
  </el-row>
</el-card>
  </re-col>
  <re-col
    v-motion
    class="mb-[18px]"
    :value="24"
    :xs="24"
    :initial="{
      opacity: 0,
      y: 100
    }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: {
        delay: 560
      }
    }"
  >

    <el-card shadow="never" class="h-[580px]">
      <div class="flex justify-between">
        <span class="text-md font-medium">出行链列表</span>
      </div>
      <PureTable class="mt-3" :dataList="data"/>
    </el-card>
  </re-col>
</el-row>
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
