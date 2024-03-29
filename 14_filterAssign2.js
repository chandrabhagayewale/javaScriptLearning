class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_dept = emp_dept;
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
const array_emps = [ emp_anil,emp_radha,emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi,];

console.log( `=================Employees from Wipro company=====================`);
const arrayFilterOfEmployee = array_emps.filter((Employee) => {
  return Employee.emp_company == "Wipro";
});
arrayFilterOfEmployee.forEach((currentValue) => {
  console.log(currentValue);
});

console.log( `=======================Employees from IT and HR department==============================`);
const arrayOfItDept = array_emps.filter((Employee) => {
  return Employee.emp_dept == "IT" || Employee.emp_dept == "HR";
});
arrayOfItDept.forEach((currentValue) => {
  console.log(currentValue);
});
console.log( `=======================Employees whose empid are greater than 50 ==============================`);
const arrayId = array_emps.filter((Employee) => {
  return Employee.emp_id > 50;
});
arrayId.forEach((currentValue) => {
  console.log(currentValue);
});
console.log(`=======================name startswirth A, M, V==============================`);

const arrayName = array_emps.filter((Employee) => {
  return Employee.emp_name.startsWith("A")|| Employee.emp_name.startsWith("M") ||Employee.emp_name.startsWith("V")
     })
  arrayName.forEach((currentValue)=>{
    console.log(currentValue);
  
});
// console.log(`========================= average salary===========================================`)
const averageSallary=array_emps.filter((Employee)=>{
  return  Employee.emp_dept=="IT"
})

 