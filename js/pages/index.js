function addCitiesToSelector() {
    let selector = document.getElementById("select-city");
    let cities = getCitiesFromLocalStorage();

    for (let i = 0; i < cities.length; i++) {
        selector.innerHTML += `<option value="${cities[i]}">${cities[i]}</option>`
    }
}

addCitiesToSelector();