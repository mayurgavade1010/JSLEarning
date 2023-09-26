console.log(`======================================Assignment-02===================================`);
function stringHandsOn(){
    var greet="     Hey you are doing good, keep it up      "
    console.log(`1.Given string is: ${greet}`);
    console.log(`2.Length of string is: ${greet.length}`);
    console.log(`3.String after trim is: ${greet.trim()} and length of the string after trim is: ${greet.trim().length}`);
    console.log(`4.Total number of spaces removed: ${greet.length-greet.trim().length}`);
    console.log(`5.First character after trim: ${greet.trim().charAt(0)}  and last character after trim: ${greet.trim().charAt(greet.trim().length-1)}`);
    console.log(` words after step 3: ${greet.trim().split(" ")}`);
    console.log(`6.count of total words after step 3: ${greet.trim().split(" ").length}`);
    var greetTrim=greet.trim().indexOf('good');
    console.log(`7.Index of 'good' word is: ${greetTrim}`);
    var substr=greet.trim().substr(22)
    console.log(`8.Substring starting from index 22 is: ${substr}`);
    var slice=greet.trim().slice(22);
    console.log(`8.Slice the string starting from index 22 is: ${substr}`);
  
    console.log(`9.String ends with "up": ${greet.trim().endsWith('up')}`);
    console.log(`10.String starts with "Hey": ${greet.trim().startsWith('Hey')}`);


}
stringHandsOn();
