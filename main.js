const num = +prompt("Введите число:");
let i = 2;
if (num > 1) {
    while (i < num) {
        if (num % i === 0) {
            console.log(num + " не простое число");
            break;
        }
        i++;
    }
    if (i === num) {
        console.log(num + " простое");
    }
} else {
    console.log("Число должно быть больше 1");
}
