type Human = {
    name:string
}

type Doctor = Human & {
    special : number
}

let GetDoctor : Doctor = {
    name : "ssss",
    special: 1
}