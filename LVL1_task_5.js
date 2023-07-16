const gracefulTipping = (bill) => {
  let tip = bill * 0.15 + bill;
  let roundedTip;
  if (bill < 10) {
    roundedTip = Math.ceil(tip);
  } else if (bill < 100) {
    roundedTip = Math.ceil(tip / 5) * 5;
  } else if (bill < 1000) {
    roundedTip = Math.ceil(tip / 50) * 50;
  } else if (bill < 10000) {
    roundedTip = Math.ceil(tip / 500) * 500;
  } else {
    roundedTip = Math.ceil(tip / 5000) * 5000;
  }
  return roundedTip;
};

console.log("1 ->", gracefulTipping(1));
console.log("86 ->", gracefulTipping(86));
console.log("80679 ->", gracefulTipping(80679));
