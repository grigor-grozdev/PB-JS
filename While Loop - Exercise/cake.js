function cake(input){
    let w = Number(input[0]);
    let l = Number(input[1]);
    let cake = w * l;
    let index = 2;
    let command = input[index];

    while(command !== "STOP"){
        let pieces = Number(command);
        cake -= pieces;
            if (cake < 0){
                console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`); break;
            }
        index++
        command = input[index];
    }
    if(cake >= 0){
        console.log(`${cake} pieces are left.`);
    }
}

cake(["10","2","2","4","6","STOP"]);