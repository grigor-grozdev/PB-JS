function test(input){
    let num = Number(input[0]);
    let isFinish = false;

    for (let a = 1; a <= 9; a++){
        if (isFinish){
            break;
        }
        for(let b = 9; b >= a; b--){
            if (isFinish){
                break;
            }
            for ( let c = 0; c <= 9; c++){
                if (isFinish){
                    break;
                }
                for ( let d = 9; d >= c; d--){
                    if ( ((a+b+c+d) === (a*b*c*d)) && ((num%10) === 5)){
                        console.log(`${a}${b}${c}${d}`);
                        isFinish = true;
                        break;
                    } else if (Math.trunc((a*b*c*d)/(a+b+c+d)) === 3 && (num % 3 === 0)){
                        console.log(`${d}${c}${b}${a}`);
                        isFinish = true;
                        break;
                    }
                }
            }
        }
    }
if(!isFinish){
    console.log(`Nothing found`);
}
}

test(["123"])