function histogram(input) {
    let pcs = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= pcs; i++) {
        let num = Number(input[i]);
        if (num < 200) {
            p1++;
        } else if (num <= 399) {
            p2++;
        } else if (num <= 599) {
            p3++;
        } else if (num <= 799) {
            p4++;
        } else {
            p5++
        }
    }
    console.log(`${(p1 / pcs * 100).toFixed(2)}%`);
    console.log(`${(p2 / pcs * 100).toFixed(2)}%`);
    console.log(`${(p3 / pcs * 100).toFixed(2)}%`);
    console.log(`${(p4 / pcs * 100).toFixed(2)}%`);
    console.log(`${(p5 / pcs * 100).toFixed(2)}%`);
}

histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"])