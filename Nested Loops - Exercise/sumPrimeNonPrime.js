function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    let sumPrime = 0;
    let sumNonPrime = 0;

    while (command !== "stop") {
        let nonPrime = false;
        let num = Number(command);
        if (num < 0) {
            console.log(`Number is negative.`);
            index++
            command = input[index];
            continue;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                nonPrime = true;
                break;
            } 
        }
        if (nonPrime){
            sumNonPrime += num;
        } else{
            sumPrime += num;
        }
        index++
        command = input[index];
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

sumPrimeNonPrime(["30",

"83",

"33",

"-1",

"20",

"stop"])