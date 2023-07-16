let maxSequence = (digits) => {
  let max = 0;
  for (let i = 0; i < digits.length - 4; i++) {
    let num = +digits.slice(i, i + 5);
    if (num > max) {
      max = num;
    }
  }
  return max;
};
console.log(
  "наибольшая последовательность из 5 цифр:",
  maxSequence("1234567890")
);
