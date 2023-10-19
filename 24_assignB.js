class Employee {

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    
    this.emp_id= emp_id,
    
    this.emp_name = emp_name;
    
    this.emp_dept = emp_dept;
    
    this.emp_salary = emp_salary;
    
    this.emp_company =emp_company;
    
    }
    
    }
    
    const emp_anil =new Employee(22, "Anil", "IT", 50000, "TCS"); 
    const emp_radha = new Employee (33, "Radha", "HP", 74000, "Wipro");
    
    const emp_rishi=new Employee (55, "Rishi", "Finance", 47000, "TCS");
    
    const emp_sonali=  new Employee (66, "Sonali", "Finance", 45000, "Infy"); 
    const emp_monika=new Employee(77, "Monika", "IT", 40000, "Wipro");
    const emp_viny =new Employee(88, "Vinayak", "IT", 75000, "TCS");
    
    const emp_mahi= new Employee (99, "Mahesh", "HR", 85000, "Infy");

    let arrayEmployees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
    console.log(`========================Assignment-2========================`);
    console.log(`Step1- Name  and department of employees working in TCS company:`);
   
arrayEmployees.forEach((element) => {
    if (element.emp_company=="TCS") {
        console.log(`Employee name: ${element.emp_name} and  Department: ${element.emp_dept}`);
    }
  
});
console.log(`----------------------------------------------------------------`);

console.log(`Step2- Name and company of employees in Finance department:`);

arrayEmployees.forEach((element) => {
    if (element.emp_dept=="Finance") {
        console.log(`Employee name: ${element.emp_name} and  Company: ${element.emp_company}`);
    }
  
});


console.log(`----------------------------------------------------------------`);

console.log(`Step3- Details of employees whose name starts with 'R' :`);
const employeesStartingWithR = [];

arrayEmployees.forEach((element) => {
  if (element.emp_name.startsWith('R')) {
  console.log(`Employee id: ${element.emp_id}, Employee name: ${element.emp_name},  Department: ${element.emp_dept}, Salary: ${element.emp_salary}, Company: ${element.emp_company}`);
  }
});

console.log(`----------------------------------------------------------------`);
console.log(`Step4- Employees whose salary is greater than 75000`);
arrayEmployees.forEach((element) => {
    if (element.emp_salary>75000) {
    console.log(` Employee name: ${element.emp_name}, Company: ${element.emp_company}, Salary: ${element.emp_salary} `);
    }
  });

  console.log(`----------------------------------------------------------------`);
  console.log(`Step5- Employees whose salary is greater than or equal 50000`);
  arrayEmployees.forEach((element) => {
      if (element.emp_salary>=50000 && element.emp_dept=='IT') {
        console.log(`Employee id: ${element.emp_id}, Employee name: ${element.emp_name},  Department: ${element.emp_dept}, Salary: ${element.emp_salary}, Company: ${element.emp_company}`);
    }
    });

    console.log(`----------------------------------------------------------------`);
    console.log(`Step6- Employees whose company is 'Infy'`);
    arrayEmployees.forEach((element) => {
        if (element.emp_company=='Infy') {
          console.log(`Employee id: ${element.emp_id}, Employee name: ${element.emp_name},  Department: ${element.emp_dept}, Salary: ${element.emp_salary}, Company: ${element.emp_company}`);
      }
      });
