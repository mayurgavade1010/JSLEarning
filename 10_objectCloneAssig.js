console.log(`============================================Assignment-1========================================`);
const personalDetails={
    firstName:'Mayur',
    lastName:'Gavade',
  location:'Baramati',

}
const collegeDetails={
    collegeName:'JSPM',
    city:'Pune',
    university:'SPPU',


}
console.log(`------------------------------------------Step-1(Merging two objects)--------------------------------------------`);
Object.assign(personalDetails,collegeDetails)
console.table(personalDetails);
console.log(`------------------------------------------Step-2(Traversing array)--------------------------------------------`);

let friends=['Akshay','Ganesh','Dilip','Jatin'];

Object.freeze(friends);
//friends.push(10);
for (const element of friends) {
    console.log(element);
}
console.log(`------------------------------------------Step-3(Reverse a last word of string)--------------------------------------------`);

let company='Codemind Technology';
console.log(`Given string is: ${company}`);
let rev='';
for (let index = company.length-1; index >= 0; index--) {
    let char=company.charAt(index)
    if (char==' ' ){
break;
    }
    else{
        rev=rev+char
    }
}
console.log(rev);



