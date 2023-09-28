function trainTheTrainers(input) {
    let judges = Number(input[0]);
    let index = 1;
    let command = input[index];
    let totalGrades = 0;
    let counterTask = 0;

    while (command !== "Finish") {
        counterTask++;
        let nameTask = command;
        let sumGrades = 0;
        let grade = 0;
        for (let i = 1; i <= judges; i++) {
            index++;
            grade = Number(input[index]);
            sumGrades += grade;
        }
        totalGrades += sumGrades / judges;
        console.log(`${nameTask} - ${(sumGrades / judges).toFixed(2)}.`);
        index++;
        command = input[index];
    }
    console.log(`Student's final assessment is ${(totalGrades / counterTask).toFixed(2)}.`);
}

trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"])