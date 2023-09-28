function poolDay(input){
    let people = Number(input[0]);
    let ticket = Number(input[1]);
    let bed = Number(input[2]);
    let umbrella = Number(input[3]);
    let totalSum = 0;

    let ticketPrice = people * ticket;
    let bedPrice = Math.ceil(people * 0.75) * bed;
    let umbrellaPrice = Math.ceil(people / 2) * umbrella;
    totalSum = ticketPrice + bedPrice + umbrellaPrice;
    console.log(`${totalSum.toFixed(2)} lv.`);

}

poolDay(["100",
"8",
"6",
"4"])

