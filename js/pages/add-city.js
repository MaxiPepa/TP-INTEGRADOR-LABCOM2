function validateCity(newCity) {
    let cities = getCitiesFromLocalStorage();
  
    for (let i = 0; i < cities.length; i++) {
        if (newCity == cities[i]) {
            return "warning";
        };
    };

    consultAPI(newCity);

    return "success";
}

function removeMessage() {
    setTimeout(function() {
        document.getElementsByClassName("alert")[0].remove();
    }, 5000);
}

function addCityToLocalStorage() {
    let cities = getCitiesFromLocalStorage();
    let newCity = document.getElementById("inputCity").value;

    switch(validateCity(newCity)) {
        case "success":
            cities.push(newCity);
            localStorage.setItem("CITIES", JSON.stringify(cities));
            document.getElementById("add-city").innerHTML += successMessage;
            removeMessage();
            break;
        case "warning":
            document.getElementById("add-city").innerHTML += warningMessage;
            removeMessage();
            break;
        case "error":
            document.getElementById("add-city").innerHTML += errorMessage;
            removeMessage();
            break;
    };
};

let successMessage = '<p class="alert success">Ciudad agregada con éxito</p>';
let errorMessage = '<p class="alert error">Error: La ciudad ingresada no se encuenta en la API o se produjo un error al consultar</p>';
let warningMessage = '<p class="alert warning">La ciudad ingresada ya se encuentra almacenada</p>';

let buttonAddCity = document.getElementById("buttonAdd");
buttonAddCity.addEventListener("click", addCityToLocalStorage)
