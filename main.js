const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(arrayValue, item) {
    for (let i = 0; i < arrayValue.length; i++) {
        if (arrayValue[i] === item) {
            arrayValue.splice(i, 1);
        }
    }
}
removeElement(array, 4);
console.log(array);