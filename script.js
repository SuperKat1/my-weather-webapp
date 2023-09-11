const button = document.querySelector(".button")
const inputValue = document.querySelector(".inputValue")
const cityName = document.querySelector(".cityName")
const desc = document.querySelector(".desc")
const temperature = document.querySelector(".temperature")

button.addEventListener('click', function(){
    fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
.then(response => response.json())
.then(data => {
    const cityNameValue = data['cityName'];
    const temperatureValue = data['main']['temperature'];
    const descValue = data['weather'][0]['description'];

    cityName.innerHTML = cityNameValue;
    temperatureValue.innerHTML = temperatureValue;
    descValue.innerHTML = descValue;
})

.catch(err => alert("City name not found"))
})
