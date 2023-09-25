var greet = 'Good Morning';

console.log("========= length property =============");
var totalLength = greet.length;
console.log('Length of the string is: ', totalLength);

console.log("========== charAt() =============== ");
var charAt0 = greet.charAt(0);
console.log("Character at index 0 is: ", charAt0);
console.log('Char stored at index 5 is: ', greet.charAt(5));

var lastIndexChar = greet.charAt(greet.length-1);
console.log('Last index char is: ', lastIndexChar);

console.log('Char stored at index 5 is: ', greet.charAt(5));

var lastIndexChar = greet.charAt(greet.length-3);
console.log('Last index char is: ', lastIndexChar);
console.log("========== concatenation =============== ");
var firstName = "Jenny";
var lastName = " Gates"
var result = firstName.concat(lastName);
console.log(result);

console.log("========== indexOf =============== ");
var indexOfM = greet.indexOf('M');
console.log('Index of M is: ', indexOfM);

 console.log(greet.indexOf('nin'));

 console.log('Index of char z:',greet.indexOf('z'));
 console.log('Index of char o is:', greet.indexOf('o'));
 console.log('Index of char D:',greet.indexOf('D'));
 console.log("========== trim() =============== ");
var str = "   Good Afternoon  ";
var lengthBeforeTrim = str.length;
console.log("Length before trim : ", str.length);
var result = str.trim();
console.log("Length after trim: ", result.length);
var lengthAfterTrim = result.length;
var result = lengthBeforeTrim - lengthAfterTrim;
console.log('Removed extra spaces are: ', result);
