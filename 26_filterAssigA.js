console.log(`=================================Assignment-2 (A)==================================`);


const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log(`Given array is: ${arrayNumbers}`);
console.log(`Step1- NUmbers greater than 50 in given array`);

const arrayNum = arrayNumbers.filter( (currentValue )=> {
  
    return currentValue > 50;
    
  
} );
console.log(`Numbers greater than 50: ${arrayNum}`);
console.log(`----------------------------------------------------------`);
console.log(`Step2- Find even numbers`);
const arrayEven=arrayNumbers.filter((currentValue)=>{
            return currentValue%2==0;
});
console.log(`Even numbers are: ${arrayEven}`);
console.log(`--------------------------------------------------------------`);

console.log(`Step3- Find odd numbers`);
const arrayOdd=arrayNumbers.filter((currentValue)=>{
            return currentValue%2==1;
});
console.log(`Odd numbers are: ${arrayOdd}`);
console.log(`-------------------------------------------------------------`);
console.log(`Step4-Find the numbers which are multiple of 5`);
const arrayMul=arrayNumbers.filter((currentValue)=>{
    return currentValue%5==0;
});
console.log(` Numbers which are multiple of 5 are: ${arrayMul}`);
console.log(`-------------------------------------------------------------`);
console.log(`Find numbers which are between 20 and 50`);

const arrayBetween=arrayNumbers.filter((currentValue)=>{
    return  currentValue>20 && currentValue<50;

});
console.log(`Numbers between 20 and 50 are: ${arrayBetween}`);