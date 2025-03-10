function inputGraterThan(minValue, attempts) {

    for (let attempt = 1; attempt <= attempts; attempt++) {
        let userNumber = +prompt("Введи число больше 100");
        if (userNumber <= minValue) {
            console.log(`Неправильно, осталось для ввода ${attempts - attempt} попыток`);
        } else if (userNumber > minValue) {
            console.log(`Правильно. Последнее введенное значение: ${userNumber}`);
            break
        }
    }
}

inputGraterThan(100, 10);