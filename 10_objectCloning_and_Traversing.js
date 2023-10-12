console.log(`==========================Assignment====================`);

let bankSbi={

    bankName:'State Bank Of India',
    accHolderName:'Mayur Ashok Gavade',
    accNo:976723908211,
    ifscCode:'SBIN18548545'

}

console.log(`==========================Step-1====================`);
console.log(`------------------bankSbi object created-----------------------`);

let bankLocation={

    street:'MIDC Road',
    city:'Baramati',
    pinCode:413102
}
console.log(`------------------bankLocation object created-----------------------`);
console.log(`==========================Step-2====================`);
console.log(`Cloning object- 1 and object- 2 using Object.assign()`);
const bank=Object.assign(bankSbi,bankLocation);
console.table(bank);
console.log(`-----------------------------------------------------------`);
console.log(`Cloning object- 1 and object- 2 using Spread Operator`);

let bank1={...bank}
console.table(bank1);

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

