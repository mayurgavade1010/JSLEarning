
for (let index = 0; index <= 20; index++) {
    console.log(index);  
}

console.log(`=================`);
for (let index = 2; index <=10; index=index+2) {// according to input change the index condition
    console.log(index); 
}
// 2 4  --- 10


console.log(`======== Table of 5 =========`);
// 5  10  50
for (let index = 5; index <=50; index=index+5) {
    console.log(index);  
}

console.log(`================`);
// 10 9 8 7 -- 0
for (let index = 10; index >=0; index--) {
    console.log(index);
}

console.log(`=== Infinite loop ===`);
// for (let index = 10; index >=0; index++) {
//     console.log(index);
// }