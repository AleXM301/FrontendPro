let name = prompt("Яке в тебе ім'я?");
let isEmptyName = name === null || name.trim() === "";
if (isEmptyName) {
    alert("Шкода, що Ви не захотіли ввести своэ Ім'я");
}

let age = prompt('Скільки тобі років?');
let isEmptyAge = age === null || age.trim() === "";
if (isEmptyAge) {
    alert("Шкода, що Ви не захотіли ввести свій вік");
}

let city = prompt('Звідки ти?');
let isEmptyCity = city === null || city.trim() === "";

if (isEmptyCity) {
    alert("Шкода, що Ви не захотіли ввести своє місто");
} else {
    switch (city) {
        case "Київ" :
            alert(`Ти живеш у столиці України`)
            break
        case "Вашингтон":
            alert(`Ти живеш у столиці США`)
            break
        case "Лондон":
            alert(`Ти живеш у столиці Великобританії`)
            break
        default:
            alert(`Ти живеш у місті ${city}`)
            break
    }
}

let sports = prompt('Якийм ти спортом займаєшся?');
let isEmptySport = sports === null || sports.trim() === "";

if (isEmptySport) {
    alert("Шкода, що Ви не захотіли ввести свій спорт");
} else {
    switch (sports) {
        case "Футбол":
            alert("Круто! Хочеш стати Ліонельом Мессі?");
            break
        case "Бокс":
            alert("Круто! Хочеш стати Майклом Тайсоном?");
            break
        case "Теніс ":
            alert("Круто! Хочеш стати Карлосом Алькарас?");
            break
    }
}
let message = isEmptyName ? "": `Ваше им'я ${name}. `;
message += isEmptyAge ? "" : `Вам ${age} років. `;
message += isEmptyCity ? "" : `Ви з ${city}.`;
message += isEmptySport ? "" : `Вам подобається ${sports}.`;

if (message !== "") {
    alert(message);
}


