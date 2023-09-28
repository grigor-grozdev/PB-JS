function theMostPowerfulWord(input) {
    let index = 0;
    let command = input[index];
    let powerWord = "";
    let sum = 0;

    while (command !== "End of words") {
        let currentSum = 0;
        let word = command;
        let l = Number(word.length);
        let fL = word[0];

        for (let i = 0; i < word.length; i++) {
            let num = word.charCodeAt(i);
            currentSum += num;
        }

        if (fL === "a" || fL === "A" ||
            fL === "y" || fL === "Y" ||
            fL === "o" || fL === "O" ||
            fL === "u" || fL === "U" ||
            fL === "e" || fL === "E" ||
            fL === "i" || fL === "I") {
            currentSum *= l;
        } else {
            currentSum = Math.floor(currentSum / l);
        }

        if (currentSum > sum) {
            sum = currentSum;
            powerWord = word;
        }
        index++;
        command = input[index];
    }

    //    let text = "HELLO WORLD";
    //    let code = text.charCodeAt(0);

    console.log(`The most powerful word is ${powerWord} - ${sum}`);
}

theMostPowerfulWord([
    "Diyana",
    "End of words"])

