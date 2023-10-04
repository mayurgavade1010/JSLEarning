console.log(`================================= Assignment ======================================`);
function countCharA(str){
     var count=0;
    for (let index = 0; index < str.length; index++) {
        var char = str.charAt(index);
        if(char=='a' || char=='A'){
            count = count + 1;
        }  
    }
    console.log(`Given String is: ${str}`);
    console.log(`Count of character 'a' or 'A' in the given string= ${count} `);

}
countCharA("I AM Learning JavaScript,The Language of internet");
console.log(`-----------------------------------------------------------------------`);
countCharA("My favourite movie is LAggAn");