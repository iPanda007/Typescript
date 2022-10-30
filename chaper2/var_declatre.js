"use strict";
function demo() {
    if (true) {
        var i = "hello";
        let g = "lo";
        console.log("", g);
    }
    {
        var i = "<string>22";
    }
    console.log("i", i);
}
demo();
