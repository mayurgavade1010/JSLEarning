const person = {
    name: "Elon Musk",
    age: 54,
    totalCompany: 9
}
function show(greet){
    console.log('Inside show function...');
    console.log(greet);
    console.log(this.name, this.age);
}
show.call(person, 'Good Morning');

console.log(`======= apply() ========`);
function details(sonName, wifeName){
    console.log(this.name, this.age);
    console.log(`Son name: ${sonName}, Wife Name: ${wifeName}`);
}

details.apply(person, ['X', 'Jenny']);

console.log(`======= bind() ========`);
const stewPerson = {
    name: "Stew Jobs",
    age: 54,
    companyName: 'Apple'
}
function productsDetails(iphone, laptop){
    console.log(this.name, this.companyName);
    console.log(`Iphone: ${iphone}, Laptop: ${laptop}`);
}
const newFunction = productsDetails.bind(stewPerson);
newFunction('iPhone 15', 'Mac book M2');