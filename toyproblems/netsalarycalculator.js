//This script calculates Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 
function kraCalculations(){
// calculating gross salary by adding the salary, commissions and allowances  
//the gross salary is recorded early 
salary = 1000000
commission = 20000;
allowances = 2000;
const grossSalary = salary + commission + allowances//calculates the gross salary    
    console.log(`Your gross salary = ${grossSalary}`);


//The percentage is for both monthly and annual pay
let payAsYouEarn; //this value is not constant
    payeePercentage = 0; //the percentage to be deducted from the gross salary
    payAsYouEarn = grossSalary  * payeePercentage // calculating PAYE to be deducted from the gross salary
    if (grossSalary <= 288000 && grossSalary > 0) {
        payAsYouEarn = grossSalary * payeePercentage;
    }

    else if (grossSalary > 288001 && grossSalary <= 388000) {
        payAsYouEarn = grossSalary * payeePercentage;
    }

    else if (grossSalary > 388000) {
        payAsYouEarn = grossSalary * payeePercentage;
    }
    console.log(`Your payee = ${payAsYouEarn}`);


let nhifDeduction;//this value is not constant in respect of the gross salary
    if (grossSalary < 6000 && grossSalary > 0) {
         nhifDeduction = 150;
    }
    else if(grossSalary >= 6000 && grossSalary <= 7999) {
         nhifDeduction = 300;
    }

    else if(grossSalary >= 8000 && grossSalary <= 11999) {
         nhifDeduction = 400;
    }

    else if(grossSalary >= 12000 && grossSalary <= 14999) {
        nhifDeduction = 500;
    }

    else if(grossSalary >= 15000 && grossSalary <= 19999) {
        nhifDeduction = 600;
    }

    else if(grossSalary >= 20000 && grossSalary <= 24999) {
        nhifDeduction = 750;
    }

    else if(grossSalary >= 25000 && grossSalary <= 29999) {
        nhifDeduction = 850;
    }

    else if(grossSalary >= 30000 && grossSalary <= 34999) {
         nhifDeduction = 900;
    }

    else if(grossSalary >= 35000 && grossSalary <= 39999) {
         nhifDeduction = 950;
    }

    else if(grossSalary >= 40000 && grossSalary <= 44999) {
         nhif = 1000;
    }

    else if(grossSalary >= 45000 && grossSalary <= 49999) {
        nhif = 1100;
    }

    else if(grossSalary >= 50000 && grossSalary <= 59999) {
         nhif = 1200;
    }
    else if(grossSalary >= 60000 && grossSalary <= 69999) {
         nhifDeduction = 1300;
    }

    else if(grossSalary >= 70000 && grossSalary <= 79999) {
         nhifDeduction= 1400;
    }

    else if(grossSalary >= 80000 && grossSalary <= 89999) {
         nhifDeduction= 1500;
    }

    else if(grossSalary >= 90000 && grossSalary <= 99999) {
         nhifDeduction= 1600;
    }

    else if(grossSalary >= 100000) {
         nhifDeduction= 1700;
    }
    console.log(`Your nhif deduction = ${nhifDeduction}`);


//the maximum value is recorded yearly
let nssfDeduction; //this value is not constant
    nssfPercentage = 0; //this value is not constant in respect of the gross salary
    nssfDeduction = grossSalary * nssfPercentage; 
    if (nssfDeduction > 4800){
        nssfDeduction = 4800;
    }
    console.log(`Your nssf deductions = ${nssfDeduction}`);
    

const totalDeductions = payAsYouEarn + nhifDeduction + nssfDeduction ;// calculates total deductions which comprise of the NSSF,payee and NHIF
    console.log(`Your total deductions = ${totalDeductions}`);

const netSalary = grossSalary - totalDeductions; //calculates the net salary
    console.log(`Your net salary = ${netSalary}`);
    
}  
return(kraCalculations())//all the console logs will be output
