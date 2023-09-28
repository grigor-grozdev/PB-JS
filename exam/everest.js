function everest(input) {
    let meters = 5364;
    let days = 1;
    isFinish = false;

    let index = 0;
    let command = input[index];

    while (command !== "END") {
        
        if (command === "Yes") {
            days++;
            if (days > 5) {
                console.log(`Failed!`);
                console.log(`${meters}`);
                isFinish = true;
                break;
            }
            index++;
            command = Number(input[index])
            meters += command;
        } else if (command === "No") {
            index++;
            command = Number(input[index])
            meters += command;
        }

        if (meters >= 8848) {
            console.log(`Goal reached for ${days} days!`);
            isFinish = true;
            break;
        }
        index++
        command = input[index];
    }

    if (!isFinish) {
        console.log(`Failed!`);
        console.log(`${meters}`);
    }
}

everest(["Yes",
"1254",
"Yes",
"1402",
"No",
"250",
"Yes",
"635"])
