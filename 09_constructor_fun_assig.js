console.log(`========================================Assignment-1===========================================`);
console.log(`----------------------------------------Step-1-------------------------------------------------`);
function Bank(bankName,location,ifscCode,branchCode) {
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;
    this.show = function(){
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, IFSC Code: ${this.ifscCode}, Branch:${this.branchCode}`);
        console.log(`----------------------------------------------------------------------------------------------------------------`);
    }
    
}
console.log(`Bank Details are:`);
const yesBank=new Bank('YES Bank','Pune','YES568758',108201);
const sbiBank=new Bank('SBI Bank','Satara','SBIN33225',460258);
const mahBank=new Bank('Maharashtra Bank','Baramati','MAH126532',720242);
const axisBank=new Bank('Axis Bank','Beed','Axis156545',402112);
yesBank.show();
sbiBank.show();
mahBank.show();
axisBank.show();
console.log(`------------------------------------------Step-2------------------------------------------------------------`);
Bank.prototype.openTime='9 PM IST';
Bank.prototype.closeTime='6 PM IST';
console.log(`Bank Name: ${sbiBank.bankName}  Opening Time-${sbiBank.openTime},  Closing Time-${sbiBank.closeTime}`);
console.log(`Bank Name: ${axisBank.bankName}  Closing time-${axisBank.closeTime}` );
console.log(`Bank Name: ${yesBank.bankName}   Branch Code-${yesBank.branchCode},   Opening time-${yesBank.openTime}` );


