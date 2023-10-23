const frdNames = ['Jenny', "Bill", 'Stew', "Elon"];
// Sorting in ascending order
const sortedArray = frdNames.sort();
console.log(sortedArray);// ['Bill', 'Elon', 'Jenny', 'Stew']

// Sorting in descending order
//Output  ['Stew', 'Jenny', 'Elon', 'Bill'];
const reverseArray = sortedArray.reverse();
console.log(reverseArray);

console.log('======= Sorting an array of number ================');
const array =  [29, 15, 31, 111, 27, 6];
// Sorting an array in ascending order
const newArray = array.sort( (a, b) => {
    return a>b ? 1 : -1;
} );
console.log(newArray);
newArray