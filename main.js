let mas = [28, "ri", true, 8];

let sum = 0;
let count = 0;

for (let i = 0; i < mas.length; i++) {

    if (Number.isInteger(mas[i])) {
        sum += mas[i];
        count++;
    }
}
let result = (count === 0) ? 0 : sum / count;
console.log(result);
