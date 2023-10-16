console.log(`============================Assignment-1=================================`);

class Bank{


constructor(bank_name,location,account_no,ifsc,interest_rate){
    this.bank_name=bank_name;
    this.location=location;
    this.account_no=account_no;
    this.ifsc=ifsc;
    this.interest_rate=interest_rate;
}
}
const axis_bank=new Bank("Axis Bank","Pune",4585654525,'Axis156545',"8%");
    const sbi_bank=new Bank("SBI Bank","Mumbai",9856475258,'SBIN135852',"11%");
    const icici_bank=new Bank("ICICI Bank","Nagpur",7858585615,'ICI200545',"9%");
    const kotak_bank=new Bank("Kotak Bank","Baramati",2585286541,'KTK180045',"8%");
    const hdfc_bank=new Bank("HDFC Bank","Kondhawa",7569542562,'HDFC002454',"10%");
    const punjab_bank=new Bank("Punjab Bank","Satara",3215252655,'PUN156545',"8%");


const setOfBank= new Set();
setOfBank.add(axis_bank);
setOfBank.add(sbi_bank);
setOfBank.add(icici_bank);
setOfBank.add(kotak_bank);
setOfBank.add(hdfc_bank);
setOfBank.add(punjab_bank);

for (const element of setOfBank) {
    console.log(`Bank Name: ${element.bank_name} and  Location: ${element.location}`);
}

