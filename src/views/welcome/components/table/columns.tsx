
import { delay } from "@pureadmin/utils";
import { ref, onMounted, reactive } from "vue";
import type { PaginationProps } from "@pureadmin/table";
import ThumbUp from "@iconify-icons/ri/thumb-up-line";
import Hearts from "@iconify-icons/ri/hearts-line";
import Empty from "./empty.svg?component";

export function useColumns() {
// const dataList = ref([]);
const loading = ref(true);
const columns: TableColumnList = [
  {
    sortable: true,
    label: "序号",
    prop: "id"
  },
  {
    sortable: true,
    label: "车牌号",
    prop: "cph"
    // filterMultiple: false,
    // filterClassName: "pure-table-filter",
    // filters: [
    //   { text: "≥16000", value: "more" },
    //   { text: "<16000", value: "less" }
    // ],
    // filterMethod: (value, { requiredNumber }) => {
    //   return value === "more"
    //     ? requiredNumber >= 16000
    //     : requiredNumber < 16000;
    // }
  },
  {
    sortable: true,
    label: "起始站",
    prop: "qsz"
  },
  {
    sortable: true,
    label: "终点站",
    prop: "zdz"
  },
  {
    sortable: true,
    label: "起始时间",
    // minWidth: 100,
    prop: "qstime"
    // cellRenderer: ({ row }) => (
    //   <div class="flex justify-center w-full">
    //     <span class="flex items-center w-[60px]">
    //       <span class="ml-auto mr-2">{row.satisfaction}%</span>
    //       <iconifyIconOffline
    //         icon={row.satisfaction > 98 ? Hearts : ThumbUp}
    //         color="#e85f33"
    //       />
    //     </span>
    //   </div>
    // )
  },
  {
    sortable: true,
    label: "终止时间",
    prop: "zztime"
  },
  {
    label: "出行链",
    fixed: "right",
    slot: "operation"
  }
];

/** 分页配置 */
const pagination = reactive<PaginationProps>({
  pageSize: 10,
  currentPage: 1,
  layout: "prev, pager, next",
  total: 0,
  align: "center"
});

    function onCurrentChange(page: number) {
  console.log("onCurrentChange", page);
  loading.value = true;
  delay(300).then(() => {
    loading.value = false;
  });
}

onMounted(() => {
  // dataList.value = tableData;
  // pagination.total = dataList.value.length;
  loading.value = false;
});

return {
  Empty,
  loading,
  columns,
  // dataList,
  pagination,
  onCurrentChange
};


}
