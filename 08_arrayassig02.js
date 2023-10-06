console.log(`==================================================Assignment-2============================================`);
const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`Given array is: ${arrayNumbers}`);
console.log(`---------------------------------------------------------------------------------------------`);

console.log(`Total elements available in given array:${arrayNumbers.length}`);
console.log(`---------------------------------------------------------------------------------------------`);
console.log(`First element in given array:${arrayNumbers[0]}`);
console.log(`---------------------------------------------------------------------------------------------`);
console.log(`Last element in given array:${arrayNumbers[arrayNumbers.length-1]}`);
console.log(`---------------------------------------------------------------------------------------------`);
console.log(`Last element in given array:${arrayNumbers[arrayNumbers.length-3]}`);
console.log(`---------------------------------------------------------------------------------------------`);

let even=[];
for (const index in arrayNumbers) {
    
   if (arrayNumbers[index]%2==0) {
   
    even.push(arrayNumbers[index]);
   }
  
}
console.log(`Even elements in given array: ${even}`);
console.log(`---------------------------------------------------------------------------------------------`);

let odd=[];
for (const index in arrayNumbers) {

    if (arrayNumbers[index]%2==1) {
            odd.push(arrayNumbers[index]);
    }
   
 }
 console.log(`Odd elements in given array:${odd}`);
 console.log(`---------------------------------------------------------------------------------------------`);
 let evenPositioned=[];
 for (const index in arrayNumbers) {
    
    if (index%2==0) {
   evenPositioned.push(arrayNumbers[index]);
    }
 }
 console.log(`Even positioned elements:${evenPositioned}`);

 let sum=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2==0) {
  sum=sum+arrayNumbers[index];
}
}
console.log(`Sum of even positioned elements:${sum}`);
console.log(`---------------------------------------------------------------------------------------------`);
let oddPositioned=[];
 for (const index in arrayNumbers) {
    
    if (index%2==1) {
        oddPositioned.push(arrayNumbers[index]);
    }
 }
 console.log(`odd positioned elements:${oddPositioned}`);
 let sum1=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2==1) {
  sum1=sum1+arrayNumbers[index];
}
}
console.log(`Sum odd positioned elements: ${sum1}`);
console.log(`---------------------------------------------------------------------------------------------`);
let sum2=0;
for (let index = 0; index < arrayNumbers.length; index++) {
   sum2 =sum2+ arrayNumbers[index];
    
}
console.log(`Sum of all elements of a given array: ${sum2}`);
console.log(`---------------------------------------------------------------------------------------------`);
let newArr=[];
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index]%5==0) {
       newArr.push(arrayNumbers[index]);
    }
    
}
console.log(`Elements which are multiple of 5: ${newArr}`);

console.log(`---------------------------------------------------------------------------------------------`);
let presentElement=arrayNumbers.includes(115,0);
console.log(`is 115 is present in array or not?: ${presentElement}`);
console.log(`---------------------------------------------------------------------------------------------`);
console.log(`is 23 is present in array or not?: ${arrayNumbers.includes(23,0)}`);
console.log(`---------------------------------------------------------------------------------------------`);
arrayNumbers.splice(3,0,55,66);
console.log(`Insert 55,66 before index 3: ${arrayNumbers}`);
console.log(`---------------------------------------------------------------------------------------------`);
arrayNumbers.splice(4,3);
console.log(`Delete the 3 elements from the index 4: ${arrayNumbers}`);