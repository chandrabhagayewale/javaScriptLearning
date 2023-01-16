console.log(`===================== Given array=====================`)
const array_roll_numbers=[113,45,56,11,32,45,109,799,56,45]
console.log("Given array =",array_roll_numbers)
console.log(`===================== reversed array=====================`)
array_roll_numbers.reverse()
console.log ("reverse array=",array_roll_numbers)
console.log(`===================== sorting array=====================`)
array_roll_numbers.sort()
console.log(array_roll_numbers)
console.log("======================== Asending order array===========================")
array_roll_numbers.sort((a,b)=>{
    return   a>b ? 1 : -1
   })
 console.log(array_roll_numbers)
   console.log("======================== gretest number from array===========================")
 const grtestNum =array_roll_numbers[array_roll_numbers.length-1]
   console.log(grtestNum)
   console.log("======================== gretest number from array===========================")
const smallestNum= array_roll_numbers[0]
console.log(smallestNum)
console.log("======================== removing duplicate value from array===========================")
// const setNumbers= new Set()

//  setNumbers.add(113);
//  setNumbers.add(45);
//  setNumbers.add(56);
//  setNumbers.add(11);
//  setNumbers.add(32);
//  setNumbers.add(45);
//  setNumbers.add(109);
//  setNumbers.add(799);
//  setNumbers.add(56);
//  setNumbers.add(45);
//  console.log("Removing duplicate value :",setNumbers)
 const removeDuplicate =[...new Set(array_roll_numbers)]
 console.log(removeDuplicate)