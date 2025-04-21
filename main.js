const container = document.querySelector('.container');
let city = "Changsha";

function weatherImg(weather) {
    const weatherMap = {
        Rain: "/img/raining.png",
        Clear: "/img/sun.png",
        Clouds: "/img/cloudy.png",
    };

    return weatherMap[weather] || "/img/default.png";
}

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fab541250cefa47ff23a4042b3316fec&lang=ru`)
    .then((res) => {
        return res.json();
    }).then((data) => {

    let weather = data.weather[0];
    let temperatureInCelsius = Math.round(data.main.temp - 273.15);
    container.innerHTML = `
            <div class="weather_img"><img src="${weatherImg(weather.main)}" alt="weather img"></div>
            <p class="city">Погода в городе: <span class="up">${data.name}</span> </p>
            <p class="weather_string">Погода: <span class="up">${weather.description}</span> </p>
            <p class="temp">Температура: ${temperatureInCelsius}°C</p>`;
}).catch((error) => console.log(error));
