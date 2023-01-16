function book(){
    console.log("I like reading novels");
}
book();
function graduation(){
    console.log("I had completed B.Tech.");

}
graduation();
    function personalDetails(firstName,lastName,clgName){
        console.log("----------------personal details-------------------")
       console.log(firstName,lastName,clgName) ;
       
    }
personalDetails("chandrabhaga","Yewale","Fabtech Technical Campus Sangola");

console.log("=============Swapping Value====================")
function swapValueDude(value1,value2){
    console.log("before swapping",value1,value2);
    var temp=value1;
   value1=value2;
   value2=temp;
   console.log("after swapping",value1,value2);
}
swapValueDude("Virat","Anushka");
swapValueDude(1000,2000);

console.log("============Additon of three numbers using with attributes and return=============");
function addThreeValues(val1,val2,val3){

   var addition= val1+val2+val3;
    return addition;
}
var addresult= addThreeValues(10.23,600,40);
console.log ("add result :",addresult)
 var addString=addThreeValues("Hello","Good","Morning");
 console.log("Addition of string :",addString)


