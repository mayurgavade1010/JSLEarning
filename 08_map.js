
const map = new Map();
map.set(11, 'Jenny');
map.set(22, 'Bill');
map.set(33, 'Elon');
map.set(44, 'Stew');
console.log(map);
const key33Value = map.get(33);
console.log(key33Value);

map.set(22, 'ABC');
console.log(map);

map.set(55, 'Jenny');
console.log(map);

console.log(`Total elements in map is: ${map.size}`);

map.delete(33);
console.log(map);

console.log(map.has(22));

const keys = map.keys();
console.log(keys);
const values =map.values();
console.log(values);
console.log(`Traversing map`);

const totalKeys = map.keys();
for (const key of totalKeys) {
    console.log(key, map.get(key));
}