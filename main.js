let num = +prompt("Введите трёх значное число");
if (isNaN(num) || num > 999 || num < 100) {
    alert("Введите трёх значное число");
} else {
    let first = Math.floor(num / 100);
    let second = Math.floor((num / 10) % 10);
    let third = num % 10;

    if (first === second && second === third) {
        alert("Все числа одинаковы");
    } else if (first === second || first === third || second === third) {
        alert("Два числа одинаковы");
    }
}