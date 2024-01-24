<script setup lang="ts">
import { ref, markRaw } from "vue";
import ReCol from "@/components/ReCol";
import { useDark, randomGradient } from "@/views/welcome/utils";
import PureTable from "./components/table/index.vue";
import { ReNormalCountTo } from "@/components/ReCountTo";
import { useRenderFlicker } from "@/components/ReFlicker";
import lineChart from "./components/Line.vue";
// import pieChart from "@/views/components/able/print/pieChart.vue";
import Segmented, { type OptionsType } from "@/components/ReSegmented";
import redian from "./redian.vue"
import { latestNewsData } from "./data"
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
  <el-card shadow="never">
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
  
  
  </el-card>
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
                  <!-- 区域选择： -->
                  <el-cascader
                    v-model="selectedOptions4"
                    :options="regionDataPlus"
                    @change="handleChange"
                  />
                </span>
                <!-- <div class="leading-10">
            <div>绑定值：{{ selectedOptions4 }}</div>
            <div>
              区域码转汉字：
              {{ CodeToText[selectedOptions4[0]] }},
              {{ CodeToText[selectedOptions4[1]] }},
              {{ CodeToText[selectedOptions4[2]] }}
            </div>
            <div>
              汉字转区域码：
              {{
                convertTextToCode(
                  CodeToText[selectedOptions4[0]],
                  CodeToText[selectedOptions4[1]],
                  CodeToText[selectedOptions4[2]]
                )
              }}
            </div>
          </div> -->
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
                    <Segmented v-model="curWeek" :options="optionsBasis" />
                  </span>
                </div>
        
        </re-col>
    </el-row>
  </el-card>
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
