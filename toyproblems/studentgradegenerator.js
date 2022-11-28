//This script calculates the student grade and outputs the grade of a student in respect of the total grade achievable
function gradeCalculator(){
    const maximumGrade = 100;//The maximum grade achievable is 100
    let grade = 0;//Input the grade of the student
    //calculates the student grade
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

    else if(studentGrade < 40){
        return(`E-`)
    }
}
console.log(gradeCalculator())
