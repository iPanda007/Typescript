"use strict";
let arr = [10, 20, 30, "hello", {}];
let data = "string";
data = 10;
data = false;
console.log('data', data);
console.log("array", arr);
arr.map((s) => {
    console.log("s", s);
});
