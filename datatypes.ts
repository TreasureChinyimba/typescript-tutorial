let numList : Array<number>;
numList = [1, 2, 3, 4, 5];

let result = numList.reduce((acc, num)=> num+acc)

console.log(result);
