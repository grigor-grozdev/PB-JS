function graduation(input){
    let index = 0;
    let name = input[index];
    index++;
    let grade = Number(input[index]);
    index++
    let total = 0;
    let badGrades = 0;
    let cl = 1;
    let excluded = false;

    while (cl <= 12){
        
        if(grade < 4){
            badGrades++;
            if (badGrades >1){
                console.log(`${name} has been excluded at ${cl} grade`);
                excluded = true;
                break;
            }
            grade = Number(input[index]);
            index++
            continue;
        }
        
        total = total + grade;
        grade = Number(input[index]);
        index++
        cl++
    }
    if (!excluded){
    console.log(`${name} graduated. Average grade: ${(total / 12).toFixed(2)}`);
    }

}

graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "5", "5", "6", "5", "5"])