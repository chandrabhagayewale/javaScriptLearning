console.log(`====================two object merge=====================`);
const personalDetails={
    name: "Chandrabhaga",
    graduation:"Btech",
    age:23,

}
 const collegeDetails={
    collegeName: "Fabtech Technical Campus Sangola",
    location: "Sangola",
    fees: "50,000",
 }
Object.assign(personalDetails,collegeDetails);
console.log(personalDetails);
console.log(`=====================my friends=================`);
 const arrayFriends =[ "Harshada", "Ashwini", "Pooja","Mayuri"];
 Object.freeze(arrayFriends);
 console.log(arrayFriends);
 console.log(`==================iterate friends name by using for-of loop======================`);
 for (const arrayFriend of arrayFriends) {
    console.log(arrayFriend)
 }
 console.log(`=====================Reverse string=====================`);
 let str1="Codemind";
//  console.log(`Str 1 : ${str1}`);
 let str2="Technology"
//  console.log("str2 : ",str2)
 var str2length= str2.length
//  console.log( "length of str 2:",str2length)
 let revesrseStr='';
 for (let index = str2length-1; index>=0; index--) {
     revesrseStr += str2[index]
 }
    // console.log( `reverse str 2: ${revesrseStr}` );
    console.log(`Final output: ${str1.concat(revesrseStr)} `)


 
 