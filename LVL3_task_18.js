let sumOfDigits = (num) => {
    let arr = num.toString().split("");
    let sum = 0;
    while(arr.length!==1){
        sum = arr.reduce((acc, current) => acc + +current, 0);
        console.log(`${arr.join(' + ')} = ${sum}`)
        arr = sum.toString().split("");
    }
    return sum;
};
console.log(sumOfDigits(9876));