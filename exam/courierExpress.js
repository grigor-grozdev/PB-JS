function courierExpress(input) {
    let weight = Number(input[0]);
    let type = input[1];
    let distance = Number(input[2]);

    let sum = 0;
    let addSum = 0;
    let totalSum = 0;

    switch (type) {
        case "standard":
            if (weight < 1) {
                sum = distance * 0.03;
                totalSum = sum;
            } else if (weight < 10) {
                sum = distance * 0.05;
                totalSum = sum;
            } else if (weight < 40) {
                sum = distance * 0.10;
                totalSum = sum;
            } else if (weight < 90) {
                sum = distance * 0.15;
                totalSum = sum;
            } else if (weight <= 150) {
                sum = distance * 0.20;
                totalSum = sum;
            }
            break;
        case "express":
            if (weight < 1) {
                sum = distance * 0.03;
                addSum = 0.03 * 0.80 * weight * distance;
                totalSum = sum + addSum;
            } else if (weight < 10) {
                sum = distance * 0.05;
                addSum = 0.05 * 0.40 * weight * distance;
                totalSum = sum + addSum;
            } else if (weight < 40) {
                sum = distance * 0.10;
                addSum = 0.10 * 0.05 * weight * distance;
                totalSum = sum + addSum;
            } else if (weight < 90) {
                sum = distance * 0.15;
                addSum = 0.15 * 0.02 * weight * distance;
                totalSum = sum + addSum;
            } else if (weight <= 150) {
                sum = distance * 0.20;
                addSum = 0.20 * 0.01 * weight * distance;
                totalSum = sum + addSum;
            }
            break;
    }

    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${totalSum.toFixed(2)} lv.`)
}

courierExpress(["90.0",
"standard",
"100"])

