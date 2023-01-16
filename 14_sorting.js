const arrayOfNames=["Anuja","Sonali","Manoj","Yogesh","Bharat"]
console.log(`=========== reverse() ==========`)
arrayOfNames.reverse()
console.log(arrayOfNames)
console.log(`==================== sort in Asending order ===============`)
arrayOfNames.sort();
console.log(arrayOfNames)
console.log(`==================== sort in dsending order ===============`)
arrayOfNames.reverse();
console.log(arrayOfNames)
console.log(`====================== sort array of numbers=================`)
const arrayOfNumbers=[23,111,5,99,32]
console.log(arrayOfNumbers)
arrayOfNumbers.sort((a,b)=>{
    return a>b ? 1:-1;
})
console.log(arrayOfNumbers)
console.log(`====================== sort the array in desending order=================`)
arrayOfNumbers.reverse();
console.log(arrayOfNumbers)
console.log(`====================== sort the array in desending order without using reverse() =================`)
const arrayOfNums=[45,888,5,99,67]
arrayOfNums.sort((a,b)=>{
    return a>b ? -1 :1 ;

});console.log(arrayOfNums)

