function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    let totalStudent = 0;
    let totalStandard = 0;
    let totalKid = 0;

    while (command !== "Finish") {
        let movie = command;
        index++;
        let freeSeats = Number(input[index]);
        let tickets = 0;
        index++
        let type = input[index];
        let isFull = false;

        while (type !== "End") {
            tickets++;

            switch (type) {
                case "student": totalStudent++; break;
                case "standard": totalStandard++; break;
                case "kid": totalKid++; break;
            }

            if (tickets === freeSeats) {
                console.log(`${movie} - ${(tickets / freeSeats * 100).toFixed(2)}% full.`);
                isFull = true;
                break;
            }
            index++;
            type = input[index];

        }
        if (!isFull) {
            console.log(`${movie} - ${(tickets / freeSeats * 100).toFixed(2)}% full.`);
        }
        index++;
        command = input[index];
    }
    let totalTickets = totalStudent + totalStandard + totalKid;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(totalStudent / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(totalStandard / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(totalKid / totalTickets * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["The Matrix",

    "20",

    "student",

    "standard",

    "kid",

    "kid",

    "student",

    "student",

    "standard",

    "student",

    "End",

    "The Green Mile",

    "17",

    "student",

    "standard",

    "standard",

    "student",

    "standard",

    "student",

    "End",

    "Amadeus",

    "3",

    "standard",

    "standard",

    "standard",

    "Finish"])