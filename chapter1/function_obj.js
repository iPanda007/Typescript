"use strict";
function processObj(obj) {
    var _a;
    console.log(obj.name, obj.age, (_a = obj.school) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
processObj({ name: "add", age: 1 });
