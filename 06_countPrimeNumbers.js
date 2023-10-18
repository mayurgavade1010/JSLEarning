console.log(` WAP to count the total prime number from the array.`);
const array = [11, 3, 6, 10, 43, 29, 50];
function isPrime(num) {
   
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
  
 
  let count = 0;
  
  for (const num of array) {
    if (isPrime(num)) {
      count++;
    }
  }
  
  console.log(`Total prime numbers in the array: ${count}`);

