"use strict";
let numList;
numList = [1, 2, 3, 4, 5];
let result = numList.reduce((acc, num) => num + acc);
console.log(result);
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 1] = "blue";
    color[color["green"] = 2] = "green";
})(color || (color = {}));
let b = color.red;
