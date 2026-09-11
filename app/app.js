// 消费记录数组：每一条是对象 {type, money, desc}
let records = [];

/**
 * addRecord：弹窗输入一条记录，并且做非法输入清洗
 */
function addRecord() {
  const type = prompt("输入消费类别（餐饮/交通/购物）：");
  const moneyStr = prompt("输入金额：");
  const desc = prompt("简单备注：");

  const money = Number(moneyStr);
  // 非法输入判断：空类别、不是数字、小于等于0 → 丢弃，不崩溃
  if (!type || isNaN(money) || money <= 0) {
    console.log("⚠️ 输入无效，这条记录已丢弃");
    return;
  }

  records.push({
    type: type,
    money: money,
    desc: desc
  });
}

// 入口：先录入2条
addRecord();
addRecord();
/**
 * filterByType - filter：筛选指定类别的记录
 * @param {string} t 类别名
 */
function filterByType(t) {
  return records.filter(r => r.type === t);
}

/**
 * getTotalSpend - reduce：算总花费
 */
function getTotalSpend() {
  return records.reduce((sum, r) => sum + r.money, 0);
}

/**
 * formatList - map：把对象数组转成可读字符串数组
 */
function formatList() {
  return records.map(r => `${r.type} ¥${r.money} ${r.desc}`);
}

/**
 * printReport：输出完整记账报告到控制台
 */
function printReport() {
  if (records.length === 0) {
    console.log("暂无消费记录");
    return;
  }
  console.log("=== 全部记录 ===");
  console.log(formatList());
  console.log("=== 总花费 ===");
  console.log(`¥${getTotalSpend()}`);
  console.log("=== 餐饮类 ===");
  console.log(filterByType("餐饮"));
}

// 打印报告
printReport();