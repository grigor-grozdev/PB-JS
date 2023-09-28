function coins(input) {
    let num = Number(input[0]);
    let coins = 0;
    let change = Math.floor(num * 100);

    while (change > 0) {
        if (change >= 200) {
            coins++;
            change -= 200;
            continue;
        } else if (change >= 100) {
            coins++;
            change -= 100;
            continue;
        } else if (change >= 50) {
            coins++;
            change -= 50;
            continue;
        } else if (change >= 20) {
            coins++;
            change -= 20;
            continue;
        } else if (change >= 10) {
            coins++;
            change -= 10;
            continue;
        } else if (change >= 5) {
            coins++;
            change -= 5;
            continue;
        } else if (change >= 2) {
            coins++;
            change -= 2;
            continue;
        } else if (change >= 1) {
            coins++;
            change -= 1;
            continue;
        }
    }
    console.log(coins);
}

coins(["5.73"])