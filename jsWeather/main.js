//filler



const apiKey = "37dc94bdda2af01c8f95d8bbe440a4d8"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather (city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json();

    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round( data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".windness").innerHTML = data.wind.speed + " km/h";

    switch (data.weather[0].main) {
        case "Clouds":
            weatherIcon.src = "assets/clouds.png";
            break;
        case "Clear":
            weatherIcon.src = "assets/clear.png";
            break;
        case "Drizzle":
            weatherIcon.src = "assets/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "assets/mist.png";
            break;
        case "Rain":
            weatherIcon.src = "assets/rain.png";
            break;
        case "Snow":
            weatherIcon.src = "assets/snow.png";
            break;

    }

    document.querySelector(".weather").style.display = 'block';

}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})


