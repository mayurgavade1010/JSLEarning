console.log(`========================Assignment-2 (B)======================`);

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monica = new Employee(77, "Monica", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi];
console.log(`Step1- Find the emplyee name who working in TCS company`);
const arrayNamesTcs = arrayEmployees
  .filter((employee) => {
    return employee.emp_company =='TCS';
  });

arrayNamesTcs.forEach((employee) => {
  console.log(`Employee Name: ${employee.emp_name}, Company: ${employee.emp_company}`);
});
console.log(`-----------------------------------------------------`);
console.log(`Step2- Find average salary of employee from company Wipro`);

const arrayWipro=arrayEmployees.filter((employee)=>{
        return employee.emp_company=="Wipro";
}).map((employee)=>{
            return employee.emp_salary;
});
//console.log(arrayWipro);

let sum=0;
for (let index = 0; index < arrayWipro.length; index++) {
     sum+= arrayWipro[index];
    }
let avgSalary=sum/arrayWipro.length;
console.log(`Average salary will be: ${avgSalary}`);
console.log(`-----------------------------------------------------`);
console.log(`Step3- Find average salary of employee from company Wipro  or Infy`);

const arrayBoth=arrayEmployees.filter((employee)=>{
    return employee.emp_company=="Wipro" || employee.emp_company=="Infy";
}).map((employee)=>{
        return employee.emp_salary;
});
//console.log(arrayBoth);

let total=0;
for (let index = 0; index < arrayBoth.length; index++) {
 total+= arrayBoth[index];
}
let averageSalary=total/arrayBoth.length;
console.log(`Average salary will be: ${averageSalary}`);
