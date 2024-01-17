// 完整版菜单比较多，将 rank 抽离出来，在此方便维护

const home = 0, // 平台规定只有 home 路由的 rank 才能为 0 ，所以后端在返回 rank 的时候需要从 1 开始哦
  able = 3,
  components = 4,
  table = 5,
  analys = 1,
  tuijian = 2,
  permission = 9,
  system = 10,
  tabs = 11;

export {
  home,
  able,
  components,
  table,
  analys,
  tuijian,
  permission,
  system,
  tabs
};
