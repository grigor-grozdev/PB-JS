function lunchBreak(input){
    let name = input[0];
    let movieTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime / 8;
    let restTime = breakTime / 4;

    let leftTime = breakTime - lunchTime - restTime;

    if (leftTime >= movieTime){
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(leftTime - movieTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(movieTime - leftTime)} more minutes.`);
    }
}

lunchBreak(["Teen Wolf",

"48",

"60"])