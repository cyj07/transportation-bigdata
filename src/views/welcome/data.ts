import { dayjs, cloneDeep, getRandomIntBetween } from "./utils";
import GroupLine from "@iconify-icons/ri/group-line";
import Question from "@iconify-icons/ri/question-answer-line";
import CheckLine from "@iconify-icons/ri/chat-check-line";
import Smile from "@iconify-icons/ri/star-smile-line";

const days = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

/** 需求人数、提问数量、解决数量、用户满意度 */
const chartData = [
{
  icon: GroupLine,
  bgColor: "#effaff",
  color: "#41b6ff",
  duration: 2200,
  name: "车辆总流量",
  value: 360000,
  percent: "+88%",
  data: [21010, 52880, 42390, 49620, 67520, 52080, 74500] // 平滑折线图数据
},
{
  icon: Question,
  bgColor: "#fff5f4",
  color: "#e85f33",
  duration: 1600,
  name: "出行链总量",
  value: 16580,
  percent: "+70%",
  data: [2216, 1148, 1255, 788, 4821, 1973, 4379]
},
{
  icon: CheckLine,
  bgColor: "#eff8f4",
  color: "#26ce83",
  duration: 1500,
  name: "车辆数量",
  value: 16499,
  percent: "+99%",
  data: [861, 1002, 3195, 1715, 3666, 2415, 3645]
},
{
  icon: Smile,
  bgColor: "#f6f4fe",
  color: "#7846e5",
  duration: 100,
  name: "车辆数量",
  value: 16499,
  percent: "+100%",
  data: [861, 1002, 3195, 1715, 3666, 2415, 3645]
}
];

/** 分析概览 */
const barChartData = [
{
  requireData: [2101, 5288, 4239, 4962, 6752, 5208, 7450],
  questionData: [2216, 1148, 1255, 1788, 4821, 1973, 4379]
},
{
  requireData: [21010, 32800, 44000, 49620, 57520, 68890, 76000],
  questionData: [2116, 3148, 3255, 3788, 4821, 4970, 5390],
  sanData: [2101, 3280, 4400, 4962, 5752, 6889, 7600],
  siData: [2116, 3148, 3255, 3788, 4821, 4970, 5390]
}
];

/** 解决概率 */
const progressData = [
{
  week: "周一",
  percentage: 85,
  duration: 110,
  color: "#41b6ff"
},
{
  week: "周二",
  percentage: 86,
  duration: 105,
  color: "#41b6ff"
},
{
  week: "周三",
  percentage: 88,
  duration: 100,
  color: "#41b6ff"
},
{
  week: "周四",
  percentage: 89,
  duration: 95,
  color: "#41b6ff"
},
{
  week: "周五",
  percentage: 94,
  duration: 90,
  color: "#26ce83"
},
{
  week: "周六",
  percentage: 96,
  duration: 85,
  color: "#26ce83"
},
{
  week: "周日",
  percentage: 100,
  duration: 80,
  color: "#26ce83"
}
].reverse();

/** 数据统计 */
const tableData = [
    {
        "id": 0,
        "cph": "\u4e91AQ358Y_0",
        "qstime": "2023-03-07 09:31:44",
        "qsz": "\u6d59\u6c5f\u91d1\u534e\u7ad9",
        "zztime": "2023-03-07 11:31:44",
        "zdz": "\u6d59\u6c5f\u5357\u7ad9",
        "qqhbm": "370200",
        "zqhbm": "370600",
        "cxlbh": 0
    },
    {
        "id": 1,
        "cph": "\u6d59AQ358Y_0",
        "qstime": "2023-03-07 09:31:44",
        "qsz": "\u6d59\u6c5f\u91d1\u534e\u7ad9",
        "zztime": "2023-03-07 11:31:44",
        "zdz": "\u6d59\u6c5f\u5357\u7ad9",
        "qqhbm": "370200",
        "zqhbm": "370600",
        "cxlbh": 1
    }
]
Array.from({ length: 30 }).map((_, index) => {
return {
  id: index + 1,
  requiredNumber: getRandomIntBetween(13500, 19999),
  questionNumber: getRandomIntBetween(12600, 16999),
  resolveNumber: getRandomIntBetween(13500, 17999),
  satisfaction: getRandomIntBetween(95, 100),
  date: dayjs().subtract(index, "day").format("YYYY-MM-DD")
};
});

/** 最新动态 */
const latestNewsData = cloneDeep(tableData)
.slice(0, 14)
.map((item, index) => {
  return Object.assign(item, {
    date: `${dayjs().subtract(index, "day").format("YYYY-MM-DD")} ${
      days[dayjs().subtract(index, "day").day()]
    }`
  });
});

export { chartData, barChartData, progressData, tableData,latestNewsData };
