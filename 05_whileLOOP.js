//  Print numbers from 0 to 10
// initialization 0   condition <=10   update expre = ++
console.log(`-------------1 to 10 no. by using while loop----------------`)
var i=0;  // i = 0 1 2  10  11
while (i<=10) {  // true true 
   console.log(i);  //0 1 2   10
   i++; // 1 2  10  11
}
// 
// Print numbers from 0 to 10
// initialization 0   condition <=10   update expre = ++
console.log(`-------------1 to 10 no. by using dowhile loop----------------`)
var index =0;
do {
    console.log(index);
    index++;
} while (index<=10);

// Print 70 to 7 by decrementing each time 7
 // 70  63  56  
console.log(`-------------reverse table of 7 by using dowhile loop----------------`)
 var index =70;
do {
  console.log(index);
   index = index-7; 
} while (index>=7);

