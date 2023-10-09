console.log(`==========================Assignment====================`);

const bankSbi={

    bankName:'State Bank Of India',
    accHolderName:'Mayur Ashok Gavade',
    accNo:976723908211,
    ifscCode:'SBIN18548545'

}

console.log(`==========================Step-1====================`);
console.log(`------------------bankSbi object created-----------------------`);

const location={

    street:'MIDC Road',
    city:'Baramati',
    pinCode:413102
}
console.log(`------------------location object created-----------------------`);
console.log(`==========================Step-2====================`);
console.log(`Cloning object- 1 and object- 2`);
const bank=Object.assign(bankSbi,location);
console.table(bank);
console.log(`==========================Step-3====================`);
console.log(`------------------rateOfInterest Object created------------------`);
const rateOfInterest={
    homeLoanInterest: '11%',
    personalLoanInterest:'12%',
    dueInterest:'14%',
    


}
console.log(`==========================Step-4====================`);
console.log(`--------------Merging object-1,object-2,object-3----------`);

const sbiDetails=Object.assign(bank,rateOfInterest);
console.table(sbiDetails);
console.log(`==========================Step-5=====================`);

console.log(`---------Traversing a merged object--------`);

for (const key in sbiDetails) {
   console.log(`${key}: ${sbiDetails[key]}`);
}

