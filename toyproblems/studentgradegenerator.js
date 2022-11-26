//This is a calculator that outputs the grade of a student according to the total grade achievable
const maximumGrade = 100;//The maximum grade achievable is 100
function gradeCalculator(){
    //Input the grade
    let grade = 0;
    const studentGrade = (grade / maximumGrade) * 100
    if(studentGrade === 79){
        return (`A`)
    }

    else if(studentGrade < 79 && studentGrade >= 60){
        return(`B-`)
    }
    
    else if(studentGrade <= 59 && studentGrade >= 49){
        return(`C-`)
    }

    else if(studentGrade <= 49 && studentGrade >= 40){
        return(`D-`)
    }

    else if(studentGrade > 40){
        return(`E-`)
    }
}
console.log(gradeCalculator())
