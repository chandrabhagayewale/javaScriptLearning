let myName= "Anil";
let yourName="Sunil";
myName=yourName;//deep clone always prefered on perimitive datatype
console.log(myName);
console.log(yourName);

yourName="Jenifer";
console.log(yourName);

let Anil={
    age :23,
    name:"Anil",
    company:"Microsoft"

}

let Sunil={
    age :26,
    name:"Sunil",
    company:"Google"

}

Anil=Sunil// shallow cloning

console.log("Sunil:",Sunil );
console.log("Anil:",Anil);
