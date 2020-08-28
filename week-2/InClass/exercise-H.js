function exponential(number) {
    return number * number;
}


function isEven(number) {
    return number % 2 === 0;
}

for (var number = 5; number <= 20; number++) {

    if (isEven(number)) {

        console.log(" Este es el numero usado  " + number, " y " + "  Este es el exponencial " + exponential(number));

    }

}