console.log(`===================Step-1===================`);
console.log(`Elements at the even positioned in given array are: `);
const arrayNumbers=[22,11,44,55,77,33];
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2==0) {
      let element = arrayNumbers[index];
      console.log(element);
    }
}
console.log(`===================Step-2===================`);
console.log(`Sum of the elements of  a given array  is :`);
let sum=0;
for (let index = 0; index < arrayNumbers.length; index++) {
  sum=sum+arrayNumbers[index];

}
console.log(sum);