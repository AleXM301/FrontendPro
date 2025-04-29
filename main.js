function multiply(a) {
    return function (b){
        return a * b
    }

}
let result = multiply(5)(2);
console.log(result);