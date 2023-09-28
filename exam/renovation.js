function renovation(input) {
    let h = Number(input[0]);
    let w = Number(input[1]);
    let freeSpace = Number(input[2]);
    let index = 3;
    let command = input[index];

    let sqM = (h * w) * 4;
    let sqMtPaint = Math.ceil(sqM - (sqM * freeSpace / 100));

    let paint = 0;
    let isPaint = false;

    while (command !== "Tired!") {
        let num = Number(command);
        paint += num;

        if (paint === sqMtPaint) {
            console.log(`All walls are painted! Great job, Pesho!`);
            isPaint = true;
            break;
        } else if (paint > sqMtPaint) {
            console.log(`All walls are painted and you have ${paint - sqMtPaint} l paint left!`);
            isPaint = true;
            break;
        }
        index++
        command = input[index];
    }
    if (!isPaint) {
        console.log(`${sqMtPaint - paint} quadratic m left.`)
    }
}

renovation(["2",
    "3",
    "25",
    "6",
    "7",
    "5"])
