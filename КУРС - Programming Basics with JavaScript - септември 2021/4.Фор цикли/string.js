function num() {

    let username = `User123!`;

    // ТОВА
    let currentSymbol = username.charAt(0)
    console.log(currentSymbol)

    // Е СЪЩОТО КАТО ТОВА
    console.log(username[0])



    // ТОВА Е ДРУГО - показва дължината на текста/стринга в цифри

    let word = `Hello`
    console.log(word.length)


    // ТОВА СЪБИРА БРОЯ НА БУКВИТЕ В ДВЕТЕ ДУМИ И ИЗКАРВА РЕЗУЛТАТА В ЦИФРИ
    let word1 = `Hi`
    let word2 = `Hello`

    let result = word1.length + word2.length;


    console.log(result)







}
num();