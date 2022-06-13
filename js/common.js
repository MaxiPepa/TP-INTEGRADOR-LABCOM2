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
    fetch(`api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=es`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => {return "error"})
}