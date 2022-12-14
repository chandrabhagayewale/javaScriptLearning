console.log("========================= 1.Sqare of the Number================================================");
var sqare=function(num){
 result=num*num;
 
 console.log( "sqare of",num,"=",result);
}
sqare(5);
sqare(6);
sqare(25);
sqare(100);

console.log("==================2.Type of function================================");
console.log(typeof sqare);

console.log("==================3..Area of the Rectangle================================");
var area=function(length,width){
console.log("Area of Rectanle =",length*width,);
}
area(499,917);

console.log("==================4.Swapping Value================================");
var swapValues= function(val1,val2){
console.log("Before Swapping:",val1,val2);
 var temp=val1;
val1=val2;
val2=temp;
console.log("After Swapping:",val1,val2);
}
swapValues("Virat","Anushka");
swapValues(1000,2000);

console.log("==================5.Position================================");
var string = function(){
var language="JS the most popular language";
console.log("A.total caracter index in given string:",language.length);
console.log("B.caracter at index 6:",language.charAt(6));
console.log("C.caracter at index 11:",language.charAt(11));
var lengthTotal=language.length;
console.log("D. last chracter in given string:",language.charAt(lengthTotal-1))
console.log("E.caracter at index 0:",language.charAt(0));
console.log("F.total caracter index in given string:",language.length);
console.log("sqare of length:",lengthTotal*lengthTotal);
}
string();