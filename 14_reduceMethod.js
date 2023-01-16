const arrayOfNumbers=[0 ,2, 3, 5 , 6, 8]
 const result=arrayOfNumbers.reduce((runningTotal,value)=>{
    return runningTotal+value//adiition ,use only summation purpose
})
console.log(result);

 const multiplication=arrayOfNumbers.reduce((runningTotal,value)=>{
    return runningTotal*value// multiplication
})
console.log(multiplication);
console.log(`==================sum of all even  numbers=============================`);
const array=[20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19]
 const evenNums=array.filter((value)=>{
   return value%2==0
});
console.log(evenNums);
const finalResult=evenNums.reduce((runningTotal,value)=>{
    return runningTotal+value;
})
console.log("addition of even number=",finalResult)

console.log(`=====chaining methods==========`)
const resultSum=array.filter(value=>value%2==0).reduce((runningTotal,value)=>runningTotal+value);
console.log("chaining method =",resultSum);
