console.log(`===============Vehical Details=======================`)
class Vehical{
 constructor(name, numberOfWheels,seatingCapacity,velocity){
    this.name=name;
    this.numberOfWheels=numberOfWheels;
    this.seatingCapacity=seatingCapacity;
    this.velocity=velocity
 }
}
let VehicalBus=new Vehical("Bus",6,45,"50kmph");
let VehicalCar=new Vehical("Car",4,5,"50kmph");
let VehicalBike=new Vehical("Bike",2,2,"30kmph");
let VehicalTractor=new Vehical("Tractor",4,1,"7kmph");
let VehicalScooter=new Vehical("Scooter",2,2,"40kmph");
console.log(VehicalBus);
console.log(VehicalCar);
console.log(VehicalBike);
console.log(VehicalTractor);
console.log(VehicalScooter);
console.log(`================college Details using member function=======================`)
class College{
    constructor( name, location,dept,founder){
        this.name=name;
        this.location=location;
        this.dept=dept;
        this.founder=founder;

}
details(){
    console.log(this.name,this.location,this.dept,this.founder);
}
}
let clgFabtech=new College( "FTCCOER","Sangola","MECH,CIVIL,ENTC,ELECTRICAL,CSE"," Dr.Birasaheb Rupnar");
let clgSveri=new College( "SVERI","Pandarpur","MECH,CIVIL,ENTC,ELECTRICAL,CSE"," Dr.B.P. Ronge");
let clgTkit=new College( "TKIT","Panahala","MECH,CIVIL,ENTC,ELECTRICAL,CSE,IT"," Dr.Tatyasaheb Kore");
let clgAdcet=new College( "ADCET","Sangali","MECH,CIVIL,ENTC,ELECTRICAL,CSE,AI"," Annasaheb Dange");
clgFabtech.details();
clgSveri.details();
clgTkit.details();
clgAdcet.details();
 


console.log(`========================traverseObject function=====================`)
function traverseObject( detailsClg){
 for (const key in detailsClg) {
    if (Object.hasOwnProperty.call(detailsClg, key)) {
        const element = detailsClg[key];
        console.log(key,element, );
    }
 }
 console.log(`\n`);
}
traverseObject(clgFabtech);
traverseObject(clgSveri);
traverseObject(clgTkit);
traverseObject(clgAdcet);
