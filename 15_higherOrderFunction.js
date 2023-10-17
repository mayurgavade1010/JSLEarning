function jennyHomework(callback){
    console.log(`Jenny started assignments`);
    console.log('Her assignments solving is in progress');
    console.log(`Jenny's assignment is completed`);
    console.log('==============================');
    callback();
    return function(){
        console.log(`Yahoo. We both completed assignments`);
    }
}
let elonCopyHomework = function(){
    console.log(`Thank you Jenny for calling me back`);
    console.log('Elon started copying assignments');
    console.log('Elon copied all assignments');
    console.log('==============================');
}
// const result = jennyHomework(elonCopyHomework);
// result();
jennyHomework(elonCopyHomework)();