

var str = "I am ui developer";
var count = 0;
var vowelsCap = "AEIOU";
for (let index = 0; index < str.length-1; index++) {
    var char = str.charAt(index).toUpperCase();
    if(vowelsCap.includes(char)){
        count = count + 1;
    }  
}
console.log(`Total number of vowels are: ${count}`);

console.log("_____________________________________________________________________________________________");

function cubes(params) {
  

 var sum=0;
 for (let index = 1; index <=5; index++) {

   sum= sum+index*index*index;
  
 }
 console.log(`sum of cube ${sum}`);
}
cubes();


 console.log("_____________________________________________________________________________________________");

 function oddpositioncharA(str) {



  for (let index = 0; index < str.length; index++)
   {
    var char = str.charAt(index);
    if (index%2!==0) {
   console.log(index+"");
     
    }
   }
   
 } 
 console.log(`odd position of character=====`);
  oddpositioncharA(`Hard work always pays back`);
  console.log(`                                                              `);
 oddpositioncharA(`Soon i will be UI IT champ`);