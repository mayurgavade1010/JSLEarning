console.log("==============step-1===============");
console.log("(1)Function with no arguments and no returntype ");
function hello(){
    console.log("Welcome to javascript");
}
function code(){
    console.log("Enjoy the coding");
}
hello();
code();
console.log("=============step-2=================");
function personalDetails(firstName,lastName,collegeName){
console.log("First Name: "+firstName);
console.log("Last Name: "+lastName);
console.log("College Name: "+collegeName);
}
personalDetails("Mayur","Gavade","VidyaPratishthan");
console.log("=============step-3=================");
function swapValues(valueOne,valueTwo){
    console.log('Before swap ==>', valueOne, valueTwo);

    var temp=valueOne;
    valueOne=valueTwo;
    valueTwo=temp;

    console.log('After swap ==>', valueOne, valueTwo);

}
swapValues("Virat","Anushka");
swapValues(1000,2000);
console.log("=============step-4================");
function addThreeValues(valueOne,valueTwo,valueThree){
    console.log("Values = ",valueOne,valueTwo,valueThree);
    var result=valueOne+valueTwo+valueThree;
    console.log("Result of addition = "+result);
   
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");