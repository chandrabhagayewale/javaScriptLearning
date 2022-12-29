
  const sbiBank  = {
  bankName: "SBI",
  location: "solapur",
 accountNo: 073310110003445,
 ifsc:  "SBIN0000483",
 interestRate: 500,
 showDetails: function(){
 console.log( `the bank Details of SBI bank: ${this.bankName}, ${this.location}, ${this.accountNo} ,${this.ifsc} ,${this.interestRate}`);
 }
    }
 
  const axisBank = {
    bankName: "AXIS",
    location: "Sangola",
   accountNo:" 88990110003445",
   ifsc:  "UTIB0003816",
   interestRate: "2000",
  showDetails: function(){
 console.log( `the bank Details of AXIS bank: ${this.bankName}, ${this.location}, ${this.accountNo}, ${this.ifsc} ,${this.interestRate}`);
  }
}
  const hdfcBank = {
    bankName: "HDFC",
    location: "Pune",
   accountNo:" 607005504034451",
   ifsc:  "HDFC0000437",
   interestRate: "1000",
    showDetails: function(){
 console.log( `the bank Details of HDFC bank: ${this.bankName}, ${this.location}, ${this.accountNo} ,${this.ifsc} ,${this.interestRate}`);
  }
}

 const yesBank={
    bankName:"YES",
    location:"Mumbai",
    accountNo:"223035406677110",
    ifsc: "YES0000419",
    interestRate: "2000",
     showDetails: function(){
 console.log( `the bank Details of YES  bank: ${this.bankName}, ${this.location} ,${this.accountNo} ,${this.ifsc} ,${this.interestRate}`);
  } 
 }
 sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();