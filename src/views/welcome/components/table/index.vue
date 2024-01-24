<script setup lang="ts">
import { ref, markRaw , createVNode} from "vue";
import { utils, writeFile } from "xlsx";
import { useColumns } from "./columns";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { ReNormalCountTo } from "@/components/ReCountTo";
import { useRenderFlicker } from "@/components/ReFlicker";
import { useDark, randomGradient } from "../../utils";
import { guiji, guiji1 } from "./data";
import { ContextMenu } from "@logicflow/extension";
import GuiJiK from "../guiji/index.vue";

const { loading, columns, pagination, Empty, onCurrentChange } =
  useColumns();
const lineRef = ref();
let detailData = ref<any>(guiji)
const show = ref(false)
const props = defineProps({
dataList: {
  type: Array as PropType<Array<number>>,
  default: () => []
}
});
pagination.total = props.dataList.length;

const rowClick = (row, column, event) => {

  let id = row.cxlbh
  let data;
  if (id == '1') {
    data = guiji
  }
  else {
    data = guiji1
  }
  
  // lineRef.value = data
  detailData.value = data
  // this.$forceUpdate()
}
const sousuo = (id) => {
  let data;
  if (id == '1') {
    data = guiji
  }
  else {
    data = guiji1
  }
  detailData.value = data
  show.value = true
}
function handleClose() {
  show.value = false;
  
}
const exportExcel = () => {
const res: string[][] = props.dataList.map((item: DataItem) => {
const arr = [];
columns.forEach((column: Columns) => {
arr.push(item[column.prop]);
});
return arr;
});
const titleList: string[] = [];
columns.forEach((column: Columns) => {
titleList.push(column.label);
});
res.unshift(titleList);
const workSheet = utils.aoa_to_sheet(res);
const workBook = utils.book_new();
utils.book_append_sheet(workBook, workSheet, "数据报表");
writeFile(workBook, "出行链报表.xlsx");
};

</script>
<!-- :v-show="show" -->
<template>
    <el-dialog
          v-model="show"
          width="90%"
          title="出行链轨迹"
          :draggable="true"
          :show-close="true"
          :fullscreen="true"
          :destroy-on-close="true"
          center
        >
        <GuiJiK :guiji="detailData"/>
  </el-dialog>
    <el-row :gutter="24" justify="space-around">
<re-col
    v-motion
    class="mb-[18px]"
    :value="18"
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

    <el-button type="primary" class="mb-[6px] float-right" @click="exportExcel">导出</el-button>

  <pure-table
row-key="id"
alignWhole="center"
showOverflowTooltip
:loading="loading"
:loading-config="{ background: 'transparent' }"
:data="props.dataList.slice(
  (pagination.currentPage - 1) * pagination.pageSize,
  pagination.currentPage * pagination.pageSize
)
  "
:columns="columns"
:pagination="pagination"
@page-current-change="onCurrentChange"
@row-click="rowClick"
>
  <template #empty>
  <el-empty description="暂无数据" :image-size="60">
    <template #image>
      <Empty />
    </template>
  </el-empty>
  </template>
  <template #operation="{ row }">
  <el-button
    plain
    circle
    size="small"
    :title="`查看序号为${row.cxlbh}的详情`"
    :icon="useRenderIcon('search')"
    @click="sousuo(row.cxlbh)"
  />
  </template>
  </pure-table>
</re-col>

  <re-col
    v-motion
    class="mb-[18px]"
    :value="6"
    :xs="24"
    :initial="{
      opacity: 0,
      y: 100
    }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: {
        delay: 640
      }
    }"
  >
    <el-card shadow="never">
      <div class="flex justify-between">
        <span class="text-md font-medium">{{detailData[0].cph}}行程</span>
      </div>
      <el-scrollbar max-height="504" class="mt-3">
        <el-timeline>
          <el-timeline-item
            v-for="(item, index) in detailData"
            :key="index"
            center
            ref="lineRef"
            placement="top"
            :icon="markRaw(
              useRenderFlicker({
                background: randomGradient({
                  randomizeHue: true
                })
              })
            )
              "
            :timestamp="item.time"
          >
            <p class="text-text_color_regular text-sm">
              {{
                `站点： ${item.zdm}`
              }}
            </p>
            <p class="text-text_color_regular text-sm">
                {{
                  `经纬度：${item.long} `
                }}
              </p>
          </el-timeline-item>
        </el-timeline>
      </el-scrollbar>
    </el-card>
  </re-col>
</el-row>

</template>

<style lang="scss">
.pure-table-filter {
.el-table-filter__list {
min-width: 80px;
padding: 0;

li {
line-height: 28px;
}
}
.dc-container{
text-align: right;
}
.el-dialog {
// 设置弹出层的最大高度
max-height: calc(100vh - 60px);

}
}
</style>

<style lang="scss" scoped>
:deep(.el-table) {
--el-table-border: none;
--el-table-border-color: transparent;

.el-empty__description {
margin: 0;
}

.el-scrollbar__bar {
display: none;
}
}
</style>
