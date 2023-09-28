function nameGame(input) {

    let index = 0;
    let command = input[index];
    let winner = "";
    let winnerPoints = 0;

    while (command !== "Stop") {
        let name = command;
        let points = 0;

        for (let i = 0; i < name.length; i++) {
            let letter = name.charCodeAt(i);
            index++;
            let num = input[index];

            if (letter == num) {
                points += 10;
            } else {
                points += 2;
            }
        }
        if (points >= winnerPoints) {
            winnerPoints = points;
            winner = name;
        }
        index++
        command = input[index];
    }
    console.log(`The winner is ${winner} with ${winnerPoints} points!`);
}

nameGame(["Pesho",
    "124",
    "34",
    "111",
    "97",
    "99",
    "Gosho",
    "98",
    "124",
    "88",
    "76",
    "18",
    "Stop"])

