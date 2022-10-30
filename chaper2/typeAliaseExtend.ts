type mokey ={
    name:string
}
//intersection
type Bear =  mokey &{
    honey :boolean
}

const bear:Bear = {
    name:"Bear Name",
    honey:true
}

console.log("bear",bear)