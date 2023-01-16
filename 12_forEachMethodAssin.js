console.log(`===============index and current value===================`);
const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach((currentValue,index)=> {
    console.log("index of",currentValue,"=",index)
}
);
console.log(`====================== positive numbers====================`);
arrayNumbers.forEach((currentValue)=>{
    if(currentValue>0){
    console.log(currentValue);
}
})
console.log(`=================== negative numbers===================`)
const negativeNum=[];
arrayNumbers.forEach((currentValue)=>{
   if(currentValue<0){
    console.log(currentValue);
  negativeNum.push(currentValue)
 
 }
})
console.log("Array of negative numbers:",negativeNum)
console.log(`================Even numbers========================`);
arrayNumbers.forEach((currentValue)=>{
    if(currentValue%2==0){
        console.log(currentValue);
    }
})
console.log(`================Even positioned array values===============`);
arrayNumbers.forEach((currentValue,index)=>{
    if(index%2==0){
        console.log("indexof",index,"=",currentValue);
    }

})
