function tennisRanklist(input) {
    let num = Number(input[0]);
    let startPoints = Number(input[1]);
    let f = 0;
    let sf = 0;
    let w = 0;

    for (let i = 2; i <= num + 1; i++) {
        let etap = input[i];

        switch (etap) {
            case "F":
                f = f + 1; break;
            case "SF":
                sf = sf + 1; break;
            case "W":
                w = w + 1; break;
        }
    }
    console.log(`Final points: ${startPoints + ((f * 1200) + (sf * 720) + (w * 2000))}`);
    console.log(`Average points: ${Math.floor(((f * 1200) + (sf * 720) + (w * 2000)) / num)}`);
    console.log(`${(w / num * 100).toFixed(2)}%`);
}

tennisRanklist(["4",

    "750",

    "SF",

    "W",

    "SF",

    "W"])