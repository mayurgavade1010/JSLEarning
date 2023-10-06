let array = [10, 20, 30, 40, 50, 60];

console.log(typeof array);
console.log(`${array}`);

console.log(`Total elements in array is : ${array.length}`);

console.log(`=========== Accessing or updating array element===============`);
let element0thIndex = array[0];
console.log(element0thIndex);
console.log(array[1]);
console.log(array[array.length-1]);
console.log(`Second last element in array is:  ${array[array.length-2]}`);
console.log(`========= Updating an element===========`);
array[1] = 70;
console.log(array);

console.log(`========= indexOf()===========`);
console.log(array.indexOf(30));

console.log(`========= Traversing an array===========`);
let arrayNum = [22, 11, 44, 55, 77, 33];
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    console.log(element); 
}
console.log(`========= Traversing an array in reverse order===========`);
for (let index = arrayNum.length-1; index >=0; index--) {
    const element = arrayNum[index];
    console.log(element);
}

let arrayNums = [22, 11, 44, 55, 77, 33];
console.log(`====== Adding element in last=========`);
arrayNums.push(88);
console.log(arrayNums);

arrayNums.push(90);
console.log(arrayNums);

let arrayNumbers = [22, 11, 44, 55, 77, 33];
console.log(`====== Removing element in last=========`);
arrayNumbers.pop();
console.log(arrayNumbers);
var arrayNumber = [22, 11, 44, 55, 77, 33];
console.log(`====== slice() =========`);
const arraySliced = arrayNumber.slice(3);
console.log(arraySliced);

const arrayElements = arrayNumber.slice(1, 4);
console.log(arrayElements);
console.log(`====== splice() to insert element =========`);
var arrayNumber = [22, 11, 44, 55, 77, 33];
// Insert element 99 at index 2 ==> [22, 11, 99, 44, 55, 77, 33]
arrayNumber.splice(2,0,99);
console.log(arrayNumber);

console.log(`Insert elements 100, 200, 400 at index 3 and at the time of insertion don't replace any elements`);
var arrayNumber = [22, 11, 44, 55, 77, 33];
// Insert elements 100, 200, 400 at index 3 ==> [22, 11, 44, 100,200,400,55, 77, 33];
arrayNumber.splice(3, 0, 100, 200, 400);
console.log(arrayNumber);

console.log(`Insert an element 500 at index 2 by replacing an element `);
var arrayNumber = [22, 11, 44, 55, 77, 33];
// [22, 11, 500, 55, 77, 33];
arrayNumber.splice(2, 1, 500);
console.log(arrayNumber);

console.log(`Insert an element 700 at index 3 by replacing 2 elements`);
var arrayNumber = [22, 11, 44, 55, 77, 33];
// [22, 11, 44, 700, 33]
arrayNumber.splice(3, 2, 700)
console.log(arrayNumber);
console.log(`for in loop`);
var arrayNumber = [22, 11, 44, 55, 77, 33];
console.log(`============for in===========`);
for (const index in arrayNumber) {
    const element=arrayNumber[index];
    console.log(`Index: ${index}, value: ${element}`);
}
console.log(`========= Traversing an array using while loop ==============`);
var arrayNumber = [22, 11, 44, 55, 77, 33];
var index=0;
while (index<arrayNumber.length) {
    console.log(arrayNumber[index]);
    index++;
}
console.log(`========= Traversing an array using do-while loop ==============`);

var arrayNumber=[22,11,44,55,77,33];

  var index=0;
do {
    console.log(arrayNumber[index]);
    index++;
} while (index<arrayNumber.length);
// MERN Developer - M: Mongo db, E: Express JS, R: Rect, N: NodeJS
// MEAN Developer - M: Mongo db, E: Express JS, A: Rect, N: NodeJS
var arrayNumber = [22, 11, 44, 55, 77, 33];
console.log(`for of loop`);
for (const element of arrayNumber) {
    console.log(element);
}
console.log(`join method`);
const joinedElement = arrayNumber.join(",");
console.log(joinedElement);

console.log(`Resizing an array`);
var arrayNumber = [22, 11, 44, 55, 77, 33];// [22, 11, 44]
arrayNumber.length = 3;
console.log(arrayNumber);
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
    console.log(element);
}