const car={
    carName:"Creta SX",
    company:"Hundai",
    launchYear:"2017"
}
const carEngine={
    enginePower:"1499CC",
    maxPower:"113BHP"
}
console.log(`=====================merge object by using object.assign========================`);
const mergeobj=Object.assign({},car,carEngine);
console.log(mergeobj);
console.log(`==============================merge object using spread operator=============================`);
const mergeObject={...car,...carEngine}
console.log(mergeObject)