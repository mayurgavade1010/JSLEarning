let person = {
    name: "Jenny",
    age: 22,
    isMarried: true,
    city: "Pune",
    pin: 431202
 };
// const name = person.name;
// const age = person.age;
// const isMarried = person.isMarried;
// const city = person.city;

let {name, age, isMarried, city, country="Bharat"} = person;
console.log(name, age, isMarried, city, country);

const array = ['Mona', 'Sona', 'Tona', 'Bawa'];

let [element1, element2, element3, element4,element5]= array;

console.log(element1, element2, element3, element4,element5);
