let company = {
    sales: [{name: "John", salary: 1000}, {name: "Alice", salary: 600}],
    development: {
        web: [{name: "Peter", salary: 2000}, {name: "Alex", salary: 1800}],
        internals: [{name: "Jack", salary: 1300}],
    }
}

function calcSalary(obj) {
    let sum = 0;
    for (const key in obj) {
        if (Array.isArray(obj[key])) {
            sum += calcSalary(obj[key]);
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
            sum += calcSalary(obj[key]);
        } else if (key === "salary") {
            sum += obj[key];
        }
    }
    return sum;
}

console.log(calcSalary(company));