console.log(`========================================ASSignment==============================`);
console.log(`-------------Converted given json string into object----------------------`);
let employeeInfo= `{
    "name":"Aleix Melon",
    "id":"E00245",
    "role":["Dev","DBA"],
    "age" :23,
    "doj":"11-12-2019",
    "married":false,
    "address": {
        "street1":"32,Laham St.",
        "city":"Innsbruck",
        "country":"Austria"

    },
    "referred-by":"E0012"
}`

//console.log(employeeInfo);
//console.log(typeof employeeInfo);
 let psst=JSON.parse(employeeInfo);
 console.log(typeof psst);
 console.log(psst);
console.log(`-----------------------log the 'Dev'------------------------------`);
console.log(psst.role[0]);
let splitName=psst.name.split(" ");
console.log(`-----------------------log the 'LastName'------------------------------`);

console.log(splitName[1]);
console.log(`-----------------------log only joining year(2019)------------------------------`);





let splitDate=psst.doj.split("-");
console.log(splitDate[splitDate.length-1]);

