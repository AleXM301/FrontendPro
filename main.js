let numOrStr = prompt('input number or string');
console.log (numOrStr);

switch (true) {
    case numOrStr === null:
        console.log("ви скасували")
        break
    case typeof numOrStr === "string" && numOrStr.trim() === "":
        console.log("Empty string");
        break;
    case isNaN(+numOrStr):
        console.log("number is Ba_NaN")
        break
    default:
        console.log('OK!')
        break
}