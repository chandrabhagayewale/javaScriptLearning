console.log(`=============Bank Details==========`);
function bank( bankName,location,ifsc,branchCode){
    this.bankName=bankName;
    this.location=location;
    this.ifsc=ifsc;
    this.branchCode=branchCode;}

    

bank.prototype.openTime="9 AM IST";
bank.prototype.closeTime=" 6 PM IST";

 let yesBank =new bank("YES bank" ,"Mumbai" ,"YESB0000419", "000419");
 let sbiBank=new bank("SBI bank", "solapur", "SBIN0040210","040210");
 let mahBank=new bank("Maharashtra bank","pune","MAHS0000941","000941");
 let axisBank=new bank("AXIS bank","Sangola","UTIB0003816","003816")
 console.log(yesBank)
console.log(sbiBank);
 console.log(mahBank)
console.log(axisBank)   
console.log(`\n`)
console.log(`===========Added data member by using PROTOTYPE================`);
 console.log(`OpenTime of SBIBANK :${sbiBank.openTime} And CloseTime of SBIBANK:${sbiBank.closeTime}`);
 console.log(`BANKNAME: ${axisBank.bankName} And closeTime of AXISBANK :${axisBank.closeTime}`);
 console.log(`BANKNAME:${yesBank.bankName},BranchCode of YESBANK:${yesBank.branchCode} And CloseTime of YESBANK ${yesBank.closeTime}`);