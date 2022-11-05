interface Car{
    model : string;
    releaseYear?:number;
}
let telsa:Car = {
    model :"car",
    releaseYear:2022,
}
console.log("model in telsa",'model' in telsa)
console.log("milage in telsa",'milage' in telsa)