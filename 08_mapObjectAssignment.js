console.log(`================================ASsignment-2============================`);
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

    const map=new Map();
    map.set('Axis156545',axis_bank);
    map.set('SBIN135852',sbi_bank);
    map.set('ICI200545',icici_bank);
    map.set('KTK180045',kotak_bank);
    map.set('HDFC002454',hdfc_bank);
    map.set('PUN156545',punjab_bank);

    const totalKeys=map.keys();


    for (const key of totalKeys) {
        const bank=map.get(key);
        console.log(`Bank Name: ${bank.bank_name}, Account No.: ${bank.account_no}, Interest-Rate: ${bank.interest_rate}`);
    }