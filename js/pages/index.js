let selector = document.getElementById("select-city");

function addCitiesToSelector() {
    let cities = getCitiesFromLocalStorage();

    if (cities.length == 0) {
        selector.innerHTML += `<option value="noCities" disabled selected>No hay ciudades agregadas</option>`
    }
    else {
        selector.innerHTML += `<option value="" disabled selected>Seleccionar Ciudad</option>`
        for (let i = 0; i < cities.length; i++) {
            selector.innerHTML += `<option value="${cities[i]}">${cities[i]}</option>`
        }
    }
}

function createCard() {
    console.log(selector.value)
    let card = consultAPI(selector.value);
    let section = document.getElementById("section-weather-result");
    section.innerHTML += card

    return false;
}

let consultButton = document.getElementById("consultWeather");

addCitiesToSelector();