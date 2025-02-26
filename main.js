let limit = +prompt("Напишите число");
for (let number = 1; number <= 100; ++number) {
    let valueInPower = number ** 2;
    if (valueInPower <= limit) {
        console.log(valueInPower);
    } else {
        break;
    }
}
