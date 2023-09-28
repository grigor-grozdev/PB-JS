function characterSequence(input){
    let text = input[0];
    let buff ="";

    for (let i =0; i < text.length; i += 1){
        let letter = text[i]
        buff += letter + "\n";
    }
    console.log(buff);
}

characterSequence(["jfhgdfjgfxf"])