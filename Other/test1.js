function hairSalon(input) {

    let targe = Number(input[0]);
    let index = 0;
    let command = input[index];
    let earnedMoney = 0;
    let isFinish = false;

    while (command !== "closed") {

        let haircut = command;
        switch (haircut) {
            case "mens": earnedMoney += 15; break;
            case "ladies": earnedMoney += 20; break;
            case "kids": earnedMoney += 10; break;
        }
        let color = command;
        switch (color) {
            case "touch up": earnedMoney += 20; break;
            case "full color": earnedMoney += 30; break;
        }

        if (earnedMoney >= targe) {
            console.log(`You have reached your target for the day!`);
            console.log(`Earned money: ${earnedMoney}lv.`);
            isFinish = true;
            break;
        }
        index++
        command = input[index];
    }
    if (!isFinish){
    if (earnedMoney >= targe) {
        console.log(`You have reached your target for the day!`);
        console.log(`Earned money: ${earnedMoney}lv.`);
    } }
    if (earnedMoney < targe) {
        console.log(`Target not reached! You need ${targe - earnedMoney}lv. more.`);
        console.log(`Earned money: ${earnedMoney}lv.`);
    }
}

hairSalon(["50",
    "color",
    "full color",
    "haircut",
    "ladies"])