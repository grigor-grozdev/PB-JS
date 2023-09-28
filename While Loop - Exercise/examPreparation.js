function examPreparation(input) {
    let index = 0;
    let badGradeCount = Number(input[index]);
    index++
    let taskName = input[index];
    index++
    let grade = input[index];
    index++
    let totalGrade = 0;
    let brGrade = 0;
    let buff = "";
    let i = 0;
    let exitExam = false;

    while (taskName !== "Enough") {
        if (Number(grade) <= 4) {
            i++;
            if (i === badGradeCount) {
                console.log(`You need a break, ${i} poor grades.`);
                exitExam = true;
                break;
            }
        }
        buff = taskName;
        totalGrade = totalGrade + Number(grade);
        brGrade++
        taskName = input[index];
        index++
        grade = input[index];
        index++
    }
    if (!exitExam) {
        console.log(`Average score: ${(totalGrade / brGrade).toFixed(2)}`);
        console.log(`Number of problems: ${brGrade}`);
        console.log(`Last problem: ${buff}`);
    }
}

examPreparation(["2",

    "Income",

    "3",

    "Game Info",

    "6",

    "Best Player",

    "4"])