function repeatedElements(arr) {
  const elementCount = {};
  const repeatedElements = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (elementCount[element]) {
      if (elementCount[element] == 1) {
        repeatedElements.push(element);
      }
      elementCount[element]++;

    } else {
      elementCount[element] = 1;
    }
  }
  console.log(elementCount);

  return repeatedElements;

}

const myArray = [11, 2, 33, 11, 55, 33, 2, 11, 77, 2, 1, 11, 24, 11];
const repeatedElements = repeatedElements(myArray);
console.log(`${repeatedElements}`); 
console.log(`---------------------------------`);


if (true) {

  if (2==2) {

    console.log(`hi`);
   
  }
  
  console.log(`hello`);
  
}
else{
  console.log(`welcome`);
  
}



