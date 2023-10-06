console.log(`==================================================Assignment-1============================================`);
const arrayFruits=[" Banana"," Orange", " Apple", " Mango", " Water Melon"];
console.log(`Given array is: ${arrayFruits}`);
console.log(`---------------------------------------------------------------------------------------------`);
console.log(`First element in given array:${arrayFruits[0]}`);
console.log(`---------------------------------------------------------------------------------------------`);
console.log(`Last element in given array:${arrayFruits[arrayFruits.length-1]}`);
console.log(`---------------------------------------------------------------------------------------------`);
arrayFruits.unshift('Papaya');
console.log(`Added Papaya before Banana in given array: ${arrayFruits}`);
console.log(`---------------------------------------------------------------------------------------------`);
arrayFruits.splice(4,1);
console.log(`Array after removed Mango: ${arrayFruits}`);
console.log(`---------------------------------------------------------------------------------------------`);
arrayFruits.push(" Pineapple");
console.log(`Pineapple added at the last position:${arrayFruits}`);
console.log(`---------------------------------------------------------------------------------------------`);
arrayFruits.splice(4,0,' Dragon Fruit');
console.log(`Dragon Fruit added before the Water Melon: ${arrayFruits} `);
console.log(`---------------------------------------------------------------------------------------------`);
arrayFruits.splice(2,1,' Kiwi');
console.log(`Replace an Orange with Kiwi: ${arrayFruits}`);
console.log(`---------------------------------------------------------------------------------------------`);
const sliceArr=arrayFruits.slice(1,5);
console.log(`Elements from index 1 to 4:${sliceArr}`);
console.log(`---------------------------------------------------------------------------------------------`);

const last3gain = arrayFruits.slice(arrayFruits.length - 3);
console.log(`Last three elements from the given array are:${last3gain}`);








