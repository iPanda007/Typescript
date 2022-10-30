"use strict";
let a = "stttt";
a = 90;
function process(data) {
    if (typeof data === "string") {
        console.log("data to upperCase", data.toUpperCase());
    }
    else {
        console.log("data", data * 3);
    }
}
process("akk");
process(2);
