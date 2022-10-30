interface Test{
    name:string
    age: number
    school?:string
 }

function processObj(obj:Test){
    console.log(obj.name,obj.age,obj.school?.toUpperCase())
}

processObj({name:"add",age:1})