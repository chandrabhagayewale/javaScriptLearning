console.log(`===========Array  shallow cloning==============`);
let arrayOfEvenNum =[0 ,2 ,4 ,6 ,8 ];
let arrayOfNum = arrayOfEvenNum; //shallow cloning
arrayOfEvenNum[2]=10;
console.log(arrayOfEvenNum);
console.log(arrayOfNum);

console.log(`===========Array deep cloning==============`);
let arrayOfNumber=[0 ,2 ,4 ,6 ,8 ];
let arrayClone=[...arrayOfNumber];//deep cloning
arrayOfNumber[2]=100;
arrayClone[2]=200;
console.log(arrayOfNumber);
console.log(arrayClone);

console.log(`=====================Array merge using concat operator====================`);
let arrayNumA=[0, 2,4, 6, 8 ]
let arrayNumB=[1 ,2, 3, 4 ];
let concatArray=arrayNumA.concat(arrayNumB);
console.log(arrayNumA);
console.log(arrayNumB);
console.log(concatArray);
console.log(`==================Array merge using spread operator============`);
let mergeArray=[...arrayNumA,...arrayNumB];
console.log(mergeArray)
console.log(`===========================object merge using spread operator==============================`);
let empAnil={
    name: "Anil" ,
    role: "software developer",
}
let empAdress={
    city : "Pune" ,
    street : "Wakad"
}
let mergeObject ={ ...empAnil, ...empAdress}
console.log(mergeObject);