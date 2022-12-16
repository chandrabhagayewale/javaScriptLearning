console.log(`(1)`);
console.log(`========================The greatest Number Among Two number======================`);
var largest=function(value1,value2){
    value1>value2?console.log(`the greatest number amongst ${value1} and ${value2} is:${value1}`):console.log(`the greatest number amongst ${value1} and ${value2} is:${value2}`);
}

    largest(10,-10);
    largest(800,899);
    console.log(`======================Even OR Odd Number========================`);
    var evenOdd=function(num){
        var result = (num%2)==0?true:false;
        return result;
    }
    evenOdd(29)?console.log(`the given number 29 is: Odd`):console.log(`the given number 29 is: even`);
    evenOdd(44)?console.log(`the given number 44 is: Odd`):console.log(`the given number 44 is: even`);
    evenOdd(0)?console.log(`the given number 0 is: Odd`):console.log(`the given number 0 is: even`);
    evenOdd(101)?console.log(`the given number 101 is: Odd`):console.log(`the given number 101 is: even`);
    console.log(`======================Even OR Odd Word========================`);

var evenOddLength=function(word){
    var length=word.length;
    var result=length%2==0?"EVEN":"ODD";
    return result;
}
console.log(`The given word "JavaScript" has: ${evenOddLength("javaScript")} `);
console.log(`The given word "Google" has: ${evenOddLength("Google")} `);
console.log(`The given word "developer" has : ${evenOddLength("developer")} `);

console.log(`(2)`);
console.log(`============eligibility for Marriage Male========================`);
function maleMarriageEligibility(gender,age,boyName){
    var result= (gender=="Male" && age>=21)?`Hey ${boyName} you are eligible for Marriage`:`Hey ${boyName} you are Not eligible for Marriage`;
    return result;
}
console.log( maleMarriageEligibility("Male",25,"Billgates") );
console.log( maleMarriageEligibility("Male",17,"Stew Jobs") );
console.log(`============eligibility for Marriage Female========================`);
function femaleMarriageEligibility(gender,age,girlName){
    var result= (gender=="Female" && age>=18)?`Hey ${girlName} you are eligible for Marriage`:`Hey ${girlName} you are Not eligible for Marriage`;
    return result;
}
console.log( femaleMarriageEligibility("Female",16,"Jenifer") );
console.log( femaleMarriageEligibility("Female",27,"Malinda Gates") );