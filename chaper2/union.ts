let a:string |  number = "stttt"
a = 90;

function process(data:number | string):void{
   if(typeof data === "string"){
    console.log("data to upperCase",data.toUpperCase());
   }else{
    console.log("data",data*3)
   }
}


process("akk")
process(2)