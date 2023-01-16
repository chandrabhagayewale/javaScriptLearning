class bank {
constructor(bank_name,location,accountno,ifsc,intrestrate){
this.bank_name=bank_name;
this.location=location;
this.accountno=accountno;
this.ifsc=ifsc;
this.intrestrate=intrestrate;
}
}
console.log('===============Adding object in array and this array traversing using for of loop======================');
 let axisBank =new bank("AXIS bank","Sangola", "988855447722123","UTIB0003816","3.5%p.a");
 let sbiBank=new bank("SBI bank", "solapur", "773310110000314","SBIN0040210","7.25%");
 let iciciBank=new bank("ICICI bank","Pandarpur","678890032569078","ICIC0006471","7.10%");
 let kotakBank=new bank("KOTAK bank", "Mumbai","3344000965422109","KKBK0001350","3.5%");
 let hdfcBank=new bank("HDFC bank","Pune","556673289210974","HDFC0000148","6.25%");
 let panjabBank=new bank("PANJAB bank","Sangali","421100987654322" ,"PUNB0041800","2.75%");

 const bankArray=[axisBank,sbiBank,iciciBank,kotakBank,hdfcBank,panjabBank]
 for (const bank of bankArray) {
   {
    console.log(` Bank Details:  ${bank.bank_name}, ${bank.location}`);
 }
}

 console.log(`===========================bank details using for loop=======================`);
for (let index = 0; index < bankArray.length; index++) {
    // const element = array[index];
    console.log(bankArray[index])
}