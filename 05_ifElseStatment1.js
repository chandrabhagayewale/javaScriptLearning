console.log(`=====================Voting Eligibility===================`)
var votingEligibility=function(age){
    if(age<=0|| age>120){
    console.log(`Invalid data ${age}`)
}
else {
        if (age>=18 ) {
        console.log(`you are eleigibl for vote:${age}`);
     } else {
        console.log(` sorry you are  not eleigibl for vote:${age}`);
        }
}
}
votingEligibility(45);
votingEligibility(17);
votingEligibility(8);
votingEligibility(20);
votingEligibility(-10);
votingEligibility(200);
votingEligibility(0);
console.log(`========================Grade System==============================`)
function  gradeCalculation(marks){

if(marks>=90 && marks<=100){
    console.log(` Fantastic marks:${marks} your grade is A+`);
}
if(marks>=75 && marks<90){
    console.log(` Exlent marks:${marks} your grade is A`);
}
if(marks>50 && marks<75){
    console.log(` Good marks:${marks} your grade is B`);
}
if(marks>=35 && marks<50){
    console.log(`  marks marks:${marks} your grade is c ,need improvement`);
}
if(marks<=0 || marks>100 ){
    console.log(` provide the valid marks : ${marks}`);
}
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");