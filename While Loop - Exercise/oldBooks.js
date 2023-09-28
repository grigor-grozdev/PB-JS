function oldBooks(input) {
    
    let favoriteBook = input[0];
    let i = 1;
    let currentBook = input[i];
    let count = 0;
    let bookIsFound = false;

    while (currentBook !== "No More Books") {
        
        if (currentBook === favoriteBook) {
            console.log(`You checked ${count} books and found it.`);
            bookIsFound = true;
            break;
        }
        count++;
        i++
        currentBook = input[i];
        
    }
    if (!bookIsFound) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${count} books.`);
    }
}

oldBooks(["Troy",

"Stronger",

"Life Style",

"Troy"])