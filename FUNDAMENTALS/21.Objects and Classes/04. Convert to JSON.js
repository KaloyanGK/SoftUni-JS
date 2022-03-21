function convert(name, lastName, hairColor) {

    let person = {
        name,
        lastName,
        hairColor,
    }
    
    let result = JSON.stringify(person);
    console.log(result);

}

convert('George', 'Jones', 'Brown')
convert('Peter', 'Smith', 'Blond')