console.log(`==============================Assignment-2=========================`);

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

console.log(`Step1- Employees from 'Wipro' company`);


const arrayNamesWipro = arrayEmps .filter((employee) => {
  return employee.emp_company =='Wipro';
});
const wiproEmp=arrayNamesWipro.reduce((runningTotal,employee)=>{
  runningTotal.push(employee.emp_name);
  return runningTotal;
},[])
console.log(`Employee Name: ${wiproEmp}`);
 console.log(`----------------------------------------------------`);

  console.log(`Step2- Employees from 'IT' or 'HR' company`);

  const arrayDept=arrayEmps.filter((employee)=>{
return employee.emp_dept=='IT' || employee.emp_dept=='HR';
  });
  const dept=arrayDept.reduce((runningTotal,employee)=>{
    runningTotal.push(employee.emp_name);
    return runningTotal;
  },[]);
  console.log(`Employee Name: ${dept}`);
  console.log(`-----------------------------------------------------`);
  console.log(`Step3- Employees which are ID gerater than 50`);

  const arrayId=arrayEmps.filter((employee)=>{
    return employee.emp_id>50;
      });
      const id=arrayId.reduce((runningTotal,employee)=>{
        runningTotal.push(employee.emp_name);
        return runningTotal;
      },[]);
      console.log(`Employee Name: ${id}`);
      console.log(`-------------------------------------------------------------`);

  console.log(`Step4- Employees name starts with  'A', 'V' , 'M' `);

  const arrayNames=arrayEmps.filter((employee)=>{
    return employee.emp_name.startsWith('A') ||  employee.emp_name.startsWith('V') ||  employee.emp_name.startsWith('M') ;
      })
      const startWith=arrayNames.reduce((runningTotal,employee)=>{
                 runningTotal.push(employee.emp_name);
                 return runningTotal;
      },[]);
      console.log(`Employee Name: ${startWith}`);
      console.log(`-------------------------------------------------------------`);

    console.log(`Step5- Average salary of all employee`);

    
    const averageSalary= arrayEmps.reduce( (runningTotal, employee)=>{
        return runningTotal + employee.emp_salary/arrayEmps.length;
    }, 0);
// console.log(sum);    
  
        console.log(` Average salary of all employee: ${averageSalary}`);
        console.log(`-----------------------------------------------`);
      
console.log(`Step6- Average salary for 'IT' department`);

const arraySalaryIT=arrayEmps.filter((employee)=>{
    return  employee.emp_dept=='IT';
        })

const average=arraySalaryIT.reduce((runningTotal,employee)=>{
    return runningTotal+employee.emp_salary/arraySalaryIT.length;
},0);
console.log(`Average salary for IT department : ${average}`);











