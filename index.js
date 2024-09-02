const API_Key = "8daf0ce337db47e4be111942240109";
const url = "http://api.weatherapi.com/v1/current.json?key=8daf0ce337db47e4be111942240109&aqi=yes&q="

const currentImage= document.querySelector(".currentWeatherImg");
const btnSearch = document.querySelector(".btn")


async function worldWeather(_city) {
    const theWeather = await fetch(url + _city);
    const weatherData = await theWeather.json();

console.log(weatherData)

document.querySelector(".pays").innerHTML =   weatherData.location.country;

document.querySelector(".actuelTemp").innerHTML =  weatherData.location.name + " " + weatherData.current.temp_c + "°C";
document.querySelector(".feelsLike").innerHTML = "Feels like " + weatherData.current.feelslike_c
 + "°C";
 document.querySelector(".sunset").innerHTML =   weatherData.current.condition.cloud; 

//  const Sun = document.getElementById("currentWeatherImg").src ='images\sunny.png';
//  console.log(Sun)


document.querySelector(".Humidity").innerHTML = "Humidity: " +  weatherData.current.humidity;

document.querySelector(".uvIndex").innerHTML = "UV index: "+ weatherData.current.uv  ;

document.querySelector(".wind").innerHTML =  "Wind Speed: " + weatherData.current.wind_mph;


document.querySelector(".sunrise").innerHTML =  "Local time: " + weatherData.location.localtime;
 

}



btnSearch.addEventListener ("click", () => {
    
const city = document.querySelector(".inputSearch").value;
    worldWeather(city);
    const promesse = new Promise((resolve, reject) => {
        url = "http://api.weatherapi.com/v1/current.json?key=8daf0ce337db47e4be111942240109&aqi=yes&q="

        if(city ){
    
            resolve ('success');
    
        } else { reject("invalid city")}
    })
    promesse.then(value => {
        console.log(value);
    }).catch(reason => {
        console.log(reason)
    })
})
