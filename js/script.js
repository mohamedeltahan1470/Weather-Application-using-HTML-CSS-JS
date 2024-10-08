
const apiKey = "205d662d8c9394287d16cdf683f3d99c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const InvalidName = document.querySelector(".error");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if (response.status === 404) {
        InvalidName.style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "images/clouds.png";
                break;
            case "Clear":
                weatherIcon.src = "images/clear.png";
                break;
            case "Rain":
                weatherIcon.src = "images/rain.png";
                break;
            case "Drizzle":
                weatherIcon.src = "images/drizzle.png";
                break;
            case "Mist":
                weatherIcon.src = "images/mist.png";
                break;
        }

        InvalidName.style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
