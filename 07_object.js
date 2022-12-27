
 let dattta= {
    "height":6,
    "weight":70,
    "age":23
}
let myLaptop ={
    05: "bug sur",
    companayName: "apple",
    ram: "8GB",
    color: "silver",
    processor: "M1 Processsor"
}
const person = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates",
    speak:function(){
        console.log(`Hey I can speak English and Hindi`);
      }
    
  }
  console.log(typeof person);
  console.log(person);
  console.log(`Accssing object properties using dot notation `)
  const personAge=person.age;
  console.log(`person age is: ${personAge}`);
  console.log(`Accssing object properties using bracket notation `)
  const personName = person["name"];
console.log(personName);
console.log(`============Adding a property into an object=========`)
person.company = "Microsoft";
console.log(person);

console.log(`=== Updating an property into an object====`);
person.age = 65;
console.log(person);

console.log(`=== Deleting an property into an object====`);
delete person.weight;
console.log(person);

console.log(`=== Accessing an function from an object====`);
person.speak();

console.log(`=== Creating an empty object====`);
const mobile = {

}
mobile.company = "Micromax";
mobile.camera = "20Px";
console.log(mobile);

person.walk=function(){
    console.log(`Hey i can walk and run`);
}
console.log(person);

console.log(`Nested object`);
const student = {
    name: "Stew Jobs",
    age: 50,
    marks: {
        science: 70,
        math: 90,
        english: 87,
        add: function() {
            return this.science+this.math+this.english;
         }
        },
        familyMemberNames: [ 'Tony', 'Lonny', 'Jenny', 'Watigton']
         
}
console.log(student);
console.log(`Accessing an Nested object property`);
const scienceMark =  student.marks.science;
console.log(scienceMark);

console.log(`Updating an Nested object property`);
 const englishMarks=student.marks.english = 97;
console.log(englishMarks)
console.log(`Adding an Nested object property`);
 const programming=student.marks.programming = 100;
console.log(programming)

console.log(`Accessing an nested object function`);
const totalMarks=student.marks.add();
console.log(`Total marks :${totalMarks}`);

console.log(`Accessing an array`);
console.log(student.familyMemberNames);

console.log(`Object entries`);
const billgates = {

    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates"
}
console.log(Object.entries(billgates));
console.log(Object.keys(billgates));
console.log(Object.values(billgates));
