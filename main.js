function increment() {
    let sum = 0;
    return function (a) {
        return sum += a;
    }
}

let incrementation = increment();
console.log(incrementation(4));
console.log(incrementation(6));
console.log(incrementation(10));
console.log(incrementation(7));
