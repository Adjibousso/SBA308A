export function updateWeatherWidget(weatherData) {
    try {
        console.log(weatherData)

        document.querySelector(".pays").innerHTML = weatherData.location.country;

        document.querySelector(".actuelTemp").innerHTML = `${weatherData.location.name} ${weatherData.current.temp_c}°C`;
      
        document.querySelector(".feelsLike").innerHTML = `Feels like ${weatherData.current.feelslike_c}°C`;
        document.querySelector(".Humidity").innerHTML = `Humidity: ${weatherData.current.humidity}`;
        document.querySelector(".uvIndex").innerHTML = `UV index: ${weatherData.current.uv}`;
    

        document.querySelector(".sunset").innerHTML = 'Wind Speed ' + weatherData.current.wind_mph
        //`Local time: ${weatherData.location.localtime}`;
        document.querySelector(".clarite").innerHTML = 'Clarity ' + weatherData.current.wind_mph

        const weatherImg = document.querySelector(".currentWeatherImg img");
        weatherImg.src = "https:" + weatherData.current.condition.icon;
        weatherImg.alt = weatherData.current.condition.text;


         const selectMe = document.querySelector('.wind');
         selectMe.innerHTML = "forcast: ";
        const imageIcon = document.createElement("img");
        imageIcon.src = "https:" + weatherData.current.condition.icon
        imageIcon.alt = weatherData.current.condition.text

        selectMe.appendChild(imageIcon);
    } catch (e) {
        console.log(e)
    }

}

