"use strict";
function greet(msg) {
    console.log("hello", msg);
}
greet("ass");
function add(a, b) {
    return a + b;
}
let j = add(1, 2);
console.log(j);
//annonymus function
const names = ["alice", "bob", "eve"];
//automatically inferr type 
names.forEach(function (s) {
    console.log(s === null || s === void 0 ? void 0 : s.toUpperCase());
});
