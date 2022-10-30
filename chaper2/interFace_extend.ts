interface Animal{
    name:string
}

interface Beer extends Animal{
    honey : boolean;
}

const beer : Beer = {
    name:"panda",
    honey:true
}

console.log(beer.name, beer.honey)