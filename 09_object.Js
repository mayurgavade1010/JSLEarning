//object creation using object literals

let person={
    name:"Jenny",
    age:22,
    isMarried:true,
    show:function y() {
       console.log("Hi hello,How are you?"); 
    }

};
console.log(typeof person);
console.log(person);
//Property Access
//1.Dot Notation
let personName=person.name;
console.log(`Person name is: ${personName}`);
console.log(`Person age is: ${person.age}`);
//2.[] Notation
let nameOfPerson=person["name"];
console.log(`Person name is: ${nameOfPerson}`);
console.log("Adding Property in object");
person.city="Pune";
console.log(person);
console.table(person);
console.log("Update property in object");
person.age=20;
console.log(person);
console.log("Delete property from an object");
delete person.age;
console.log(person);
console.log("Adding method in object");
person.show();
person.display=function(){
    console.log("I am inside a display function");
}

console.log(person);
const personElon = {
    name:"Elon Musk",
    age:54,
    totalCompany:9,
    companies:{
        tesla:{
            companyName:"Tesla",
            totalEmployees:4500,
            location:"USA"
        },
        twitter:"150B USD",
        spacex:"20B USD",
    },
    kidsName:["Deny","Weny","Rony","Randy","Mony"]
}
let elonCompanies=personElon.companies.tesla;
console.log(elonCompanies);
let elonKids=personElon.kidsName[0];
console.log(elonKids);
console.log(personElon.kidsName[personElon.kidsName.length-1]);
console.log(personElon.kidsName.length);
personElon.kidsName.push("Stew");
console.log(personElon);
for (const kid of personElon.kidsName) {
    console.log(`${kid}`);
    
}

