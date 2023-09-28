function shopping(input) {
    let budget = Number(input[0]);
    let GPU = Number(input[1]);
    let CPU = Number(input[2]);
    let RAM = Number(input[3]);

    let costGPU = GPU * 250;
    let costCPU = costGPU * 0.35 * CPU;
    let costRAM = costGPU * 0.10 * RAM;

    let cost = costGPU + costCPU + costRAM;

    if (GPU > CPU) {
        cost *= 0.85;
    }

    if (cost <= budget) {
        console.log(`You have ${(budget - cost).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(cost - budget).toFixed(2)} leva more!`);
    }
}

shopping(["900",

    "2",

    "1",

    "3"])