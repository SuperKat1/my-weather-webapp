const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript plus change";
document.querySelector("body").appendChild(h2);


fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
.then(response => response.json())
.then(data =>console.log(data))
