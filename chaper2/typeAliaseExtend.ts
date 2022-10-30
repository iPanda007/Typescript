type mokey ={
    name:string
}
type Bear =  mokey &{
    honey :boolean
}

const bear:Bear = {
    name:"Bear Name",
    honey:true
}

console.log("bear",bear)