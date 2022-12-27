console.log(`---------------------Step .1--------------------------`)
var str= "I am  very good IT Developer";
var counter=0;
for (let index = 0; index < str.length; index++) {
var char=str.charAt(index);
var charCopy = char.toLowerCase();
if (char=='a' ||charCopy=='e'|| charCopy=='e' ||charCopy=='i'|| charCopy=='o'|| charCopy=='u'){
console.log(char);
counter=counter+1;
}
}
console.log(`Total vovels in givaen string is:${counter}`);
console.log(`---------------------Step .2 --------------------------`)
function sumOfCube(){
    count=0
for (let index = 1; index<=5; index++) {
    cube=index*index*index
    console.log(cube);
    count=count+cube;
}
console.log(`sum of cube of numbers 1 to 5 = ${count}`);
}sumOfCube();
console.log(`-----------------------------Step 3 ----------------------------`)
function oddPositionedChars( string){
    let result=" ";
 for (let index = 0; index < string.length; index++) {
  let char=string.charAt(index)  ;
 if (index%2!==0 && char!==" "){
   result=result.concat(char);
 }
 }
console.log(`the odd position chars in "${string}" are===> ${result}` );
 
} oddPositionedChars( "Hard work always pays back");
oddPositionedChars(" Soon I will be angular IT champ");