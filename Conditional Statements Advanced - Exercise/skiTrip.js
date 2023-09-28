function skiTrip(input) {

    let days = Number(input[0]);
    let room = input[1];
    let feedback = input[2];

    let nights = days - 1;
    let sum = 0;

    if (nights < 10) {

        switch (room) {
            case "room for one person":
                sum = nights * 18;
                break;
            case "apartment":
                sum = nights * 25 * 0.70;
                break;
            case "president apartment":
                sum = nights * 35 * 0.90;
                break;
        }
    } else if (nights < 15) {
        switch (room) {
            case "room for one person":
                sum = nights * 18;
                break;
            case "apartment":
                sum = nights * 25 * 0.65;
                break;
            case "president apartment":
                sum = nights * 35 * 0.85;
                break;
        }
    } else {
        switch (room) {
            case "room for one person":
                sum = nights * 18;
                break;
            case "apartment":
                sum = nights * 25 * 0.50;
                break;
            case "president apartment":
                sum = nights * 35 * 0.80;
                break;
        }
    }
    if (feedback === "positive") {
        sum = sum * 1.25;
    } else {
        sum = sum * 0.90;
    }

    console.log(sum.toFixed(2));
}

skiTrip(["2", "apartment", "positive"])