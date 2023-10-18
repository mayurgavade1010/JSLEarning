console.log(`================================ASsignment-1===============================`);

const arrayNum=[11,3,4,11,4,7,3];
console.log(`Given array is :${arrayNum}`);
const newArr= [...new Set(arrayNum)];
console.log(`----------------------Step-1(Using Set)----------------------------------`);
console.log(`After removing duplicate element array will be: ${newArr}`);

console.log(`----------------------Using for-loop---------------------------------------`);

for (let i = 0; i < arrayNum.length; i++) {
  for (let j = i + 1; j < arrayNum.length; j++) {
    if (arrayNum[i] == arrayNum[j]) {
      arrayNum.splice(j, 1);
      j--;
    }
  }
}

console.log(`After removing duplicate element array will be:${arrayNum}`);

console.log(`-------------------------------Step-2-----------------------------------`);
const givenString= "How are you mate";
console.log(`Given String is: ${givenString}`);
function capitalFirstAndLastLetter(str) {
    const words = str.split(' ');
    let result = [];
  
    for (let i = 0; i < words.length; i++) {
      const splitWord = words[i];
      let newSplitWord = '';
  
      if (splitWord.length <= 2) {
        newWord = splitWord.toUpperCase();
      } else {
        newSplitWord = splitWord[0].toUpperCase() +splitWord.slice(1, -1) + splitWord[splitWord.length - 1].toUpperCase();
      }
  
      result.push(newSplitWord);
    }
  
    return result.join(' ');
  }
  
 
  const ans = capitalFirstAndLastLetter(givenString);
  
  console.log(`Expected output will be: ${ans}`);
  