
function primeNumber(num){
    let count=0;
    for (let index = 1; index <= num/2; index++) {
       if(num%index==0)
       {
        count+=1;
   
       }
        
    }
    if (count>2) {
        
        return false
    } else {
        return true;
    }
}

console.log(`11 is a prime number:${primeNumber(11)}`);
console.log(`16 is prime number:${primeNumber(16)}`);
console.log(`19 is prime number:${primeNumber(19)}`);
