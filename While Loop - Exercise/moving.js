function moving(input){
    let w = input[0];
    let l = input[1];
    let h = input[2];
    let freeSpace = w * l * h;
    let index = 3;
    let command = input[index];

    while (command !== "Done"){
        let currentBoxes = Number(command);
        freeSpace -= currentBoxes;
        if(freeSpace < 0){
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            break;
        }
        index++
        command = input[index];
    }
    if(freeSpace >= 0){
        console.log(`${freeSpace} Cubic meters left.`);
    }
}

moving(["10","10","2","20", "20", "20", "20", "122"])