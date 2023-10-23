console.log(`===========================Assignment==============================`);

console.log(`Step1- Find the square of the length of the word`);

function squareOFWordLength(word){

  return Math.pow(word.length,2);
}
let word1=squareOFWordLength("JavaScript");
console.log(`Square of length of word "Javascript" is: ${word1}`);
let word2=squareOFWordLength("Google Chrome");
console.log(`Square of length of wprd "Google Chrome" is: ${word2}`);
let word3=squareOFWordLength("Developer Smart");
console.log(`Square of length of word "Developer Smart" is: ${word3}`);
console.log(`------------------------------------------------------------------`);


console.log(`-------------------------------Step2---------------------------`);


function givenString() {
    let str="I am Angular Developer";
    console.log(`Given string is: ${str}`);
    console.log(`Length of the given string: ${str.length}`);
    let newStr=str.split(" ");
    console.log(`Total words in the given string are: ${newStr.length}`);

      let result=  str.length/newStr.length;
      console.log(result);
      let result1=str.length*newStr.length;
      console.log(result1);


}

givenString();