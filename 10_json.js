const postInString = `{
    "userId": 1,
    "id": 1,
    "title": "On Trip",
    "body": "Feeling awesome.. after long break"
}`
console.log(typeof postInString);
const post = JSON.parse(postInString);
console.log(typeof post);
console.log(post);

const person = {
    name: "Jenny",
    age: 34,
    city: "Pune" 
}
const personJson =JSON.stringify(person);
console.log(typeof personJson);
console.log(personJson);