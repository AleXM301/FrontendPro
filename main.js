let num0rStr = "null"
console.log (num0rStr);

switch (true) {
    case num0rStr === null:
        console.log("и скасували")
        break
    case typeof num0rStr === "string" && num0rStr.trim() === "":
        console.log("Empty string");
        break;
    case isNaN(+num0rStr):
        console.log("number is Ba_NaN")
        break
    default:
        console.log('OK!')
        break
}

