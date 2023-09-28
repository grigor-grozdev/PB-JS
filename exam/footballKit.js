function footballKit(input) {
    let tshirtPrice = Number(input[0]);
    let targetPrice = Number(input[1]);

    let shortsPrice = tshirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;
    let bootPrice = (tshirtPrice + shortsPrice) * 2;

    let totalPrice = tshirtPrice + shortsPrice + socksPrice + bootPrice;
    let discountPrice = totalPrice * 0.85;

    if (discountPrice >= targetPrice) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${discountPrice.toFixed(2)} lv.`)
    } else {
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${(targetPrice - discountPrice).toFixed(2)} lv. more.`);
    }
}

footballKit(["55",
"310"])

