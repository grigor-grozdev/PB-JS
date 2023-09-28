function excursion(input) {
    let people = Number(input[0]);
    let nights = Number(input[1]);
    let transportCards = Number(input[2]);
    let tickets = Number(input[3]);

    let nightPrice = nights * 20;
    let transportPrice = transportCards * 1.60;
    let ticketsPrice = tickets * 6;
    let singlePrice = nightPrice + transportPrice + ticketsPrice;
    let allPrice = singlePrice * people;
    let totalPrice = allPrice * 1.25;

    console.log(totalPrice.toFixed(2));
}

excursion(["131",
    "9",
    "33",
    "46"])
