function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");

    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

function consultAPI(cityName) {
    let apiKey = "6cfae99f0e3ec73740b84a68b52d0398"
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=es`)
        .then(response => {
            if (!response.ok) return "error";
            return response.json();
        })
        .then(data => {
            showWeather(data);
        })
}

function showWeather(data) {
    let city
    let temp
    let feelsLike
    let humidity
    let wind
    let pressure

    let card = `<div class="card">
                    <h3>${city}</h3>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="Imagen">
                    <p>Temperatura: ${temp}°</p>
                    <p>Sensación Térmica: ${feelsLike}°</p>
                    <p>Humedad: ${humidity}%</p>
                    <p>Velocidad del Viento: ${wind}km/h</p>
                    <p>Presión: ${pressure} P</p>
                </div>`
    return card
}