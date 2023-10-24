console.log(`==============================Assignment=============================`);

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

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi];
console.log(`Step1- Sort the array in descending order of employee id and log their id,name,department`);
const newArr=arrayEmps.sort((emp1,emp2)=>{
            return emp1.emp_id>emp2.emp_id ? -1 : 1;
});
console.log(`Employee details:`);
newArr.forEach( ( currentValue, index, array  ) => {
    console.log(`Employee id: ${currentValue.emp_id}, Employee Name: ${currentValue.emp_name}, Employee Department: ${currentValue.emp_dept}`);
} );
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`Step2- Sort the array in ascending order of employee department and log their id, department and company`);
const newArr1=arrayEmps.sort((emp1,emp2)=>{
    return emp1.emp_dept>emp2.emp_dept ? 1 : -1;
});
console.log(`Employee details:`);
newArr1.forEach( ( currentValue, index, array  ) => {
console.log(`Employee Department: ${currentValue.emp_dept}, Employee id: ${currentValue.emp_id},  Employee company: ${currentValue.emp_company}, `);
} );
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`Step3- Sort the array in descending order of employee salary and log their name, salary and company`);
const newArr2=arrayEmps.sort((emp1,emp2)=>{
    return emp1.emp_salary>emp2.emp_salary ? -1 : 1;
});
console.log(`Employee details:`);
newArr2.forEach( ( currentValue, index, array  ) => {
console.log(`Employee Name: ${currentValue.emp_name}, Employee Salary ${currentValue.emp_salary},  Employee company: ${currentValue.emp_company}, `);
} );