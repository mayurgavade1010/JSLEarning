console.log(`=====================ASsignment-3=========================`);
const arrayRollNumbers=[113,45,56,11,32,45,109,799,56,45];
console.log("Given array is: ",arrayRollNumbers);
const arrReverse=arrayRollNumbers.reverse();
console.log(`Step1- Print reverse array`);
console.log("Reverse array will be: ",arrReverse);
console.log(`---------------------------------------------`);
console.log(`Step2-use sort() without custom logic`);
const arrSort=arrayRollNumbers.sort();
console.log("Not sorted array: ",arrSort);
console.log(`---------------------------------------------`);
console.log(`Step3- Sort the array in ascending order`);
const sortArray = arrayRollNumbers.sort( (a, b) => {
    return a>b ? 1 : -1;
} );
console.log("Array in ascending order: ",sortArray);
console.log(`---------------------------------------------`);

console.log(`Step4- Greatest number from array: ${sortArray[sortArray.length-1]} `);
console.log(`---------------------------------------------`);

console.log(`Step4- Smallest number from array: ${sortArray[0]} `);
console.log(`--------------------------------------------------------`);
console.log(`Step5- Remove duplicate elements`);
for (let i = 0; i < sortArray.length; i++) {
    for (let j = i + 1; j < sortArray.length; j++) {
      if (sortArray[i] == sortArray[j]) {
        sortArray.splice(j, 1);
        j--;
      }
    }
  }
  
  console.log("After removing duplicate element array will be: ",sortArray);
  



