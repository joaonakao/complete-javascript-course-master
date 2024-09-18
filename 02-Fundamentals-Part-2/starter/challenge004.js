"use strict";

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let c = 0; c < bills.length; c++) {
  const tip = calcTip(bills[c]);
  tips.push(tip);
  totals.push(tip + bills[c]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //sum = sum + arr[i]
    sum += arr[i];
  }
  return sum / arr.length;
};


console.log(calcAverage(totals));
