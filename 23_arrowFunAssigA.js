console.log(`=============================Assignment-1==========================`);
console.log(`---------------------Step-1-------------------------`);
let arrowFunction=()=>{
    console.log(`Good Morning, Today  is Thursday`);
}
arrowFunction();
console.log(`---------------------Step-2-------------------------`);

let mul=(n1,n2,n3=1)=>{
   let res=n1*n2*n3;
   console.log(`Multiplication of ${n1}, ${n2} and ${n3} is: ${res}`);

}
mul(5,5,2);
mul(10,4);
console.log(`---------------------Step-3-------------------------`);

let addition=(n1,n2,n3,n4,n5)=>{
let addition=n1+n2+n3+n4+n5;
return addition;

}

let res=addition(100,100,200,349,756);
console.log(`After adding parameters result will be: ${res}`);

let res2=addition("I am"," learning"," ES6"," features"," in depth");
console.log(`After adding parameters result will be: ${res2}`);
