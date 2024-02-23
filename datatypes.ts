let numList : Array<number>;
numList = [1, 2, 3, 4, 5];

let result = numList.reduce((acc, num)=> num+acc)

console.log(result);


enum color {
    red,
    blue,
    green
}

let b : color = color.red;