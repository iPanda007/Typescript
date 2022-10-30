function greet(msg:string){
    console.log("hello",msg)
}

greet("ass")

function add(a:number,b:number):number{
       return a+b;
}
let j =add(1,2)



console.log(j)

//annonymus function

const names = ["alice","bob","eve"]

//automatically inferr type 
names.forEach(function(s){
     console.log(s?.toUpperCase())
})

