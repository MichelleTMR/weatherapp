
function showtext(){ 
    const name = document.querySelector('#locationname').value;

fetch(`/weather/${name}`)
.then((response) => {
    return response.json()
})
.then((json) => {
    console.log(json)

    const weatherContainer = document.getElementById("weather-container")


        const weatherDiv = document.createElement("div")
        const weatherCity = document.createElement("h1")
        const weatherTemp = document.createElement("p")
        const weatherCondition = document.createElement("p")
        const weatherPresipitation = document.createElement("p")

        weatherCity.innerText = json.city 
        weatherTemp.innerText = json.temp
        weatherCondition.innerText = json.condition
        weatherPresipitation.innerText = json.precipitation

        weatherDiv.appendChild(weatherCity)
        weatherDiv.appendChild(weatherTemp)
        weatherDiv.appendChild(weatherCondition)
        weatherDiv.appendChild(weatherPresipitation)

        weatherDiv.classList.add("weatherdisplay")

        weatherContainer.appendChild(weatherDiv)

})
.catch((error) => {
    console.log("weather not found", error);
});

}

