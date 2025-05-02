let usrString = prompt("Введите строку:");
let excludeChars = prompt("Введите символы для удаления:");

function remove(stringValue, excludeString) {
    let result = "";
    for (let i = 0; i < stringValue.length; i++) {
        if (excludeString.indexOf(stringValue[i]) === -1) {
            result += stringValue[i];
        }
    }
    return result
}

console.log(remove(usrString, excludeChars));