console.log(`===============Array Shallow cloning================`);
const arrayNums=[ 20, 3 ,4 ,56, 90, 400, 49];
const arrayClone=arrayNums;// shallow cloning 
 arrayClone.push(55, 66);
console.log("arraynums: ",arrayNums);
console.log("arrayClone: ",arrayClone);
console.log(`===============Array  deep cloning================`);
 const arrayNumA=[ 20, 3, 4, 56, 90, 400, 49 ]
  const arrayNumB=[...arrayNumA]
arrayNumA.push(10,25);
console.log( "Orignal Array :" ,arrayNumA);
console.log("Cloning Array :" ,arrayNumB);
console.log(`=======================merge array by using spread operator=========================`);
const arrayEven=[2, 30, 14, 8 ]
 const mergeArray=[...arrayEven, ...arrayNums];
 console.log("Even array : ",arrayEven)
 console.log("merge two array :",mergeArray)

 console.log(`=======================Employee Details========================`);
 employee_info={
  emp_id: 27,
  emp_name: "John Doe",
   salary :{
july_month:"40, 0000INR",
aug_month:"50, 0000INR",
jun_month:"65, 0000INR",
   },
   adress:{
    locality:{
      colony: "Om Vrindavan Colony",
      street:"Kanchan Pokali ,431202"
    },
    city: "Mummbai",
    state:"Maharashtra",
    country:"India"
 },
 mobils:[ "+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"],

 }
 console.log(employee_info.adress.locality,employee_info.adress);
  
 Array= [];
 let myArray=Array;
 console.log( `Employye numbers: \n${employee_info.mobils[0]}\n ${employee_info.mobils[1]}\n ${employee_info.mobils[2]}`)

console.log(`================================Deep cloning using JSON.stringfy()========================================`);

let empSal=JSON.parse(JSON.stringify(employee_info));
// employee_info.salary.july_month
empSal.salary.july_month="80k";
employee_info.adress.country="United Kingdem";
console.log(employee_info);
console.log(empSal);
console.log(`updated salary cloned object :${empSal.salary.july_month}`);
console.log(`update country of orignal object: ${employee_info.adress.country}`)
