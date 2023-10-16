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
const axis_bank=new Bank("Axis Bank","Pune",'Axis156545',265856,"8%");
const sbi_bank=new Bank("SBI Bank","Mumbai",'SBIN135852',262846,"11%");
const icici_bank=new Bank("ICICI Bank","Nagpur",'ICI200545',455866,"9%");
const kotak_bank=new Bank("Kotak Bank","Baramati",'KTK180045',865256,"8%");
const hdfc_bank=new Bank("HDFC Bank","Kondhawa",'HDFC002454',332654,"10%");
const punjab_bank=new Bank("Punjab Bank","Satara",'PUN156545',564856,"8%");


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

