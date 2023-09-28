function vacation(input) {
    let neededMoney = Number(input[0]);
    let currentMoney = Number(input[1]);
    let days = 0;
    let spendDays = 0;

    let index = 2;
    let command = input[index];

    while (currentMoney < neededMoney) {
        days++;
        if (command === "spend") {
            spendDays++;
            index++
            let spendMoney = Number(input[index]);
            currentMoney -= spendMoney;
            if (spendDays === 5) {
                console.log(`You can't save the money.`);
                console.log(`${days}`);
                break;
            }
            if (currentMoney < 0) {
                currentMoney = 0;
            }
        }
        if (command === "save") {
            spendDays = 0;
            index++
            let saveMoney = Number(input[index]);
            currentMoney += saveMoney;
            if (currentMoney >= neededMoney) {
                console.log(`You saved the money for ${days} days.`);
                break;
            }
        }
        index++;
        command = input[index];
    }
}

vacation(["110",

"60",

"spend",

"10",

"spend",

"10",

"spend",

"10",

"spend",

"10","spend", "10"])