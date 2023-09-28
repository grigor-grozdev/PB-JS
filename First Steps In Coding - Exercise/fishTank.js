function fishTank(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let high = Number(input[2]);
    let percent = Number(input[3]);

    let volume = lenght * width * high;
    let litre = volume * 0.001;
    litresNeeded = litre * (1 - (percent / 100));
    console.log(litresNeeded);
}

fishTank(["105 ",
"77 ",
"89 ",
"18.5 "])