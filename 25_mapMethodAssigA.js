const arraynumbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log(`==============================Assignment-1 (A)================================`);
console.log(`Given array is: ${arraynumbers}`);
console.log(`Step1- Add 10 to each element in array`);


const newArray=arraynumbers.map((currentElement)=>{
            return currentElement+10;
});
console.log(`After adding 10 to each element array will be: ${newArray}`);
console.log(`-------------------------------------------------------------------`);
console.log(`Step2- Cube the each element of array`);
const cubeArray=arraynumbers.map((currentElement)=>{
    return Math.pow(currentElement,3);
});
console.log(`After the cube array will be: ${cubeArray}`);
console.log(`-------------------------------------------------------------------`);
console.log(`Step3- Add the index value of corresponding element to itself element`);

const addIndex=arraynumbers.map((currentElement,index)=>{
        return currentElement+index;
}
);
console.log(`After adding index to element array will be: ${addIndex}`);

