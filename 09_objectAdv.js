let person = {
    name: "Jenny",
    age: 22,
    isMarried: true,
    city: "Pune"
}

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

const entry = Object.entries(person);// [ [], [], [], [] ]
console.log(entry);
for (const element of entry) {
    console.log(`${element}`);
}
console.log(`Traversing of an object...`);
for (const key in person) {
   console.log(key, person[key]);
}
const isNameAvailable =  'name' in person;
console.log(isNameAvailable);

const isPinAvailable = 'pin' in person;
console.log(isPinAvailable);
const personJenny = {
    name: "Jenny",
    age: 22,
    isMarried: true,
    city: "Pune"
}
personJenny.age = 25;
console.log(personJenny);

// personJenny = { }; Not allowed
// personJenny = person; Not allowed
//Object.freeze(personJenny);
personJenny.city = "Lucknow";
console.log(personJenny);
console.log(`Object.assign()`);

let elon = {
    name: "elon",
    age: 54,
    isMarried: true,
    country: "USA"
}

const elonClone = Object.assign({},elon);
console.log(elonClone);
console.log(`Merging an objects`);
let stew = {
    name: "elon",
    age: 54,
    isMarried: true,
    country: "USA"
}

const address= {
    pin: 234567,
    city: "Austin Texas"
}
Object.assign(stew, address);
console.table(stew);
