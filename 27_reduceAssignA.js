const array_numbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log(`=================Assignment-1======================`);
console.log(`Given array is: ${array_numbers}`);
console.log(`Step1- Find sum using reduce()`);
const sum = array_numbers.reduce( (runningTotal, value)=>{
    return runningTotal + value;
}, 0);
console.log(` Sum of array elements: ${sum}`);
console.log(`----------------USing traditional way-----------------`);
let total=0;
for (const item of array_numbers) {
    
    total+=item;
}
console.log(` Sum of array elements: ${total}`);

console.log(`------------------------------------------------------`);
console.log(`Step2- Find the numbers multiple of 5 and then sum it`);
const arrayMul=array_numbers.filter((currentValue)=>{
    return currentValue%5==0;
});

const add= arrayMul.reduce( (runningTotal, value)=>{
    return runningTotal + value;
}, 0);

console.log(`The addition of elements that are multiple of 5 is: ${add}`);