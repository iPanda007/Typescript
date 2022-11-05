interface Nayson{
    id :number;
    name:string;
}
type PersonProperty = keyof Nayson  // id | name
let dynamicProperty:PersonProperty = "id"

