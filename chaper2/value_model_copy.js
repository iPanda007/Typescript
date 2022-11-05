"use strict";
let t = 2;
let v = t;
t++;
console.log("t", t, "v", v);
let obj = {
    value: 23
};
let obj2 = obj;
obj.value++;
obj = {
    value: 20
};
obj.value++;
console.log("obj", obj, "obj2", obj2);
let array = ["23", "44", "00"];
delete array[0];
for (let i = 0; i < array.length; i++) {
    console.log(i, array[i]);
}
let l = null;
console.log("type of undefined", typeof (undefined));
console.log("type of null", typeof (l));
