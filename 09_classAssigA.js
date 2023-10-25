
console.log(`=============================================Assignment===============================================`);
console.log(`-----------------------------------------------step-1:Class for Vehicle--------------------------------------------`);
let x=1;

class Vehicle{


    constructor(modelName,color,fuelType,engine,seatingCapacity){
        this.modelName=modelName;
        this.color=color;
        this.fuelType=fuelType;
        this.engine=engine;
        this.seatingCapacity=seatingCapacity;

    }
  
}
const vehicleProperties1=new Vehicle('Maruti Suzuki Alto 800','White','Hybrid','796cc',4);
//console.log("Vehicle-1:",vehicleProperties1);
const vehicleProperties2=new Vehicle('Hyundai Exter','Blue','Hybrid','1197cc',5);
//console.log("Vehicle-2:",vehicleProperties2);
const vehicleProperties3=new Vehicle('Mahindra Scorpio','Black','Diesel','2523cc',8);
//console.log("Vehicle-3:",vehicleProperties3);
const vehicleProperties4=new Vehicle('Hyundai Creta','Grey','Petrol','1496cc',4);
//console.log("Vehicle-4:",vehicleProperties4);
const vehicleProperties5=new Vehicle('Toyota Fortuner','White','Petrol','2694cc',8);
//console.log("Vehicle-5:",vehicleProperties5);
console.log(`------------------------------------------Traversing an array----------------------------------`);
const arrayOfVehicles=[vehicleProperties1,vehicleProperties2,vehicleProperties3,vehicleProperties4,vehicleProperties5];
console.log(`Details of vehicles:`);
for (const vehicles of arrayOfVehicles) {
  console.log(`Details of vehicle-${x}==> Model Name: ${vehicles.modelName}, Color of Vehicle:${vehicles.color}, Fuel Type:${vehicles.fuelType}, Engine:${vehicles.engine}, Seating Capacity:${vehicles.seatingCapacity}`);
  
  console.log(`----------------------------------------------------------------------------------------------------------------------------------`);
  x++;
}


console.log(`-----------------------------------------------step-2:Class for College (Using Method)--------------------------------------------`);
let i=1;
class College{

    constructor(collegeName,university,numberOfDepartments,location){
        this.collegeName=collegeName;
        this.university=university;
        this.numberOfDepartments=numberOfDepartments;
        this.location=location;
        

    }
 
      display(){

        console.log(` Details of College-${i}==> College Name: ${this.collegeName}, University: ${this.university}, No.of Departments: ${this.numberOfDepartments}, Location: ${this.location}`);
        i++;
         console.log(`----------------------------------------------------------------------------------------------------------------------------------`);

    }
}
const college1=new College('JSPM','SPPU',7,'Pune');
// console.log("College-1",college1);
const college2=new College('COEP','BATU',8,'Pune');
//console.log("College-2",college2);
const college3=new College('VidyaPratishthan','SPPU',6,'Baramati');
//console.log("College-3",college3);
const college4=new College('D.Y.Patil','SPPU',9,'Pune');
//console.log("College-4",college4);
college1.display();
college2.display();
college3.display();
college4.display();
console.log(`-----------------------------------------------step-3:Write a Function and traverse every object--------------------------------------------`);
console.log(`College Details:`);
        console.log(`---------------------------------`);

function traverseObject(objectCollege) {
    for (const key in objectCollege) {
        console.log(`${key}: ${objectCollege[key]}`);
    }
}
traverseObject(college1);
        console.log(`---------------------------------`);

traverseObject(college2);
        console.log(`---------------------------------`);

traverseObject(college3);
        console.log(`---------------------------------`);

traverseObject(college4);



