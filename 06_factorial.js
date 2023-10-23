// 3! = 1 * 2 * 3 ==> 6
// 3! = 3 * 2 * 1 ==> 6
// 4! = 4 * 3 * 2 * 1 ==> 24
// 5! = 5 * 4 * 3 * 2 * 1 ==> 120 

function factorial(num){
    let factNum = 1; // 60 
    for (let index = num; index >=2; index--) {
        factNum = factNum * index;
    }
    console.log(`Factorial of ${num} is ${factNum} `);
}
factorial(5);
factorial(7);
factorial(10);