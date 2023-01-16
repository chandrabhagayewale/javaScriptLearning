 console.log(`=====================Arrow function without  arg and return value=======================`);
 let show=()=>{
console.log("Good Morning ,Today is 'Monday' ");
 }
 show();
 console.log(`=====================Arrow function with  argument =======================`);
 let display=(n1,n2,n3)=>{
       let mul=n1*n2*n3;
       console.log("Multiplication of 3 numbers :",mul);
 }
 display(5,5,2);
 display(10,4,1);

 console.log(`=====================Arrow function with  argument and return value =======================`);
 let add= (n1,n2,n3,n4,n5)=>{
     let addition = n1+n2+n3+n4+n5;
   return addition
 }
 let addresult =add(100,200,100,349,756);
 let string = add("I am","learning","ES6","featurs" ,"in depth")
 console.log (" Addition of given 5 numbers : ",addresult);
 console.log("Addition of given string is : ", string)
