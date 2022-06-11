function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");

    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

function validateCity(newCity) {
    let cities = getCitiesFromLocalStorage()
  
    for (let i = 0; i < cities.length; i++) {
        if (newCity == cities[i]) {
            return false
        }
    }

    return true
}

function addCityToLocalStorage() {
    let cities = getCitiesFromLocalStorage();
    let newCity = document.getElementById("inputCity").value;

    if (validateCity(newCity)) {
        cities.push(newCity);
        localStorage.setItem("CITIES", JSON.stringify(cities));
    }
    else {
        document.getElementById("add-city").innerHTML += warningMessage;
        setTimeout(function() {
            document.getElementsByClassName("alert")[0].remove();
        }, 5000)
    }
}

let successMessage = '<p class="alert success">Ciudad agregada con éxito</p>'
let errorMessage = '<p class="alert error">Error: La ciudad ingresada no se encuenta en la API o se produjo un error al consultar</p>'
let warningMessage = '<p class="alert warning">La ciudad ingresada ya se encuentra almacenada</p>'

let buttonAddCity = document.getElementById("buttonAdd");
buttonAddCity.addEventListener("click", addCityToLocalStorage)
