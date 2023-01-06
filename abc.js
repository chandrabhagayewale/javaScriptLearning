console.log(`==================The Bank Details are====================`);
function BankDetials(bankName,location,ifscCode,branchCode){

        this.bankName=bankName;;
        this.location=location;
        this.ifscCode=ifscCode;
        this.branchCode=branchCode;
        console.log(`Bank Details: ${this.bankName}, ${this.location}, ${this.ifscCode}, ${this.branchCode}`)


}
let yes=new BankDetials("Yes Bank","Thane","YESB0UNTY25",643);
let sbi=new BankDetials( "SBI Bank","Pune","SBIN0014473",352);
let mah=new BankDetials( "MAHA Bank","Navi Mumbai","MAHA0001028",513);
let axis=new BankDetials("Axis Bank","Mumbai","UTIB0004701",453);
BankDetials.prototype.openTime="9AM IST";
BankDetials.prototype.closeTime="6PM IST";
console.log(`===============Added Data Member================`);
console.log(`The opening Time of SBI Bank is :"${sbi.openTime}" And The Closing  Time of SBI Bank :"${sbi.closeTime}"`);
console.log(`The opening Time of Axis Bank is :"${axis.openTime}" And The Closing  Time of Axis Bank :"${axis.closeTime}"`);
console.log(`The opening Time of Yes Bank :"${yes.openTime}" And The Closing  Time of Yes Bank :"${yes.closeTime}"`);