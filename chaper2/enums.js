"use strict";
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 3] = "Open";
    DoorState[DoorState["Closed"] = 9] = "Closed";
    DoorState[DoorState["War"] = 10] = "War";
})(DoorState || (DoorState = {}));
let State = DoorState.Closed;
console.log("state", State);
