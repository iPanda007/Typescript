
// literial union type
let promiseState :"pending" | "completed" | "cancelled";
promiseState = "completed";

console.log(promiseState)

// type aliases

type StateType = "pending" | "chit tl" | "cancelled";

let stateType:StateType;

stateType = "pending"
console.log(stateType)