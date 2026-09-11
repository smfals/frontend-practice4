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