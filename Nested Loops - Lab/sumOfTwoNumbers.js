function sumOfTwoNumbers(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let count = 0;
    let stop = false;

    for (let a = startNum; a <= endNum; a++) {
        for (let b = startNum; b <= endNum; b++) {
            count++
            if (a + b === magicNum) {
                console.log(`Combination N:${count} (${a} + ${b} = ${magicNum})`);
                stop = true;
                break;
            }
        }
        if (stop) {
            break;
        }
    }
    if (!stop) {
        console.log(`${count} combinations - neither equals ${magicNum}`);
    }
}

sumOfTwoNumbers(["88", "888", "2000"])