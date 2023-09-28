function walking(input){
    let target = 10000;
    let index = 0;
    let command = input[index];
    let counter = 0;
    let goal = false;

    while (command !== "Going home"){
        let steps = Number(command);
        target -= steps;
            if (target <= 0){
                console.log(`Goal reached! Good job!`);
                console.log(`${Math.abs(target)} steps over the goal!`);
                goal = true;
                break;
            }
        index++
        command = input[index];
    }
    command = Number(input[index + 1]);
    target -= command;
    if (!goal){
    if (target <= 0){
        console.log(`Goal reached! Good job!`);
        console.log(`${Math.abs(target)} steps over the goal!`);
    } else{
        console.log(`${target} more steps to reach goal.`);
    }
}
}

walking([125,
    250,
    4000,
    30,
    2678,
    4682])