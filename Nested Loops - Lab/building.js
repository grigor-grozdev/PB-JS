function building(input){
    let floor = Number(input[0]);
    let room = Number(input[1]);

    for (let i = floor; i >= 1; i--){
    let printFloor = "";
        for (let j = 0; j < room; j++){
            if (i === floor){
                printFloor += `L${i}${j} `;
            } else if (i % 2 === 0){
                printFloor += `O${i}${j} `;
            } else {
                printFloor += `A${i}${j} `;
            }
            
        }
    console.log(printFloor);
    }
}

building(["17",

"11"])