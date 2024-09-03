import {fetchWeatherData} from './apiRequest.js';
import {updateWeatherWidget} from './external.js';

const API_Key = "8daf0ce337db47e4be111942240109";
const url = "http://api.weatherapi.com/v1/current.json?key=8daf0ce337db47e4be111942240109&aqi=yes&q="

const btnSearch = document.querySelector(".btn")


async function worldWeather(cityData) {
    try {
        console.log(cityData);
        console.log(url)
        const theWeather = await fetchWeatherData(url, cityData, API_Key);
        console.log(theWeather);
   
        updateWeatherWidget(theWeather);
        
       }catch (e){
           console.log(e);
       }

}



btnSearch.addEventListener ("click", () => {
    
    
const city = document.querySelector(".inputSearch").value;
    worldWeather(city);
    
        //url = "http://api.weatherapi.com/v1/current.json?key=8daf0ce337db47e4be111942240109&aqi=yes&q="

        if(!city ){
            alert("Enter a valid city")          
    }
})
const myForm = document.querySelector(".formData");
myForm.addEventListener("submit",event =>{
    event.preventDefault();
    const LaForm = new FormData (myForm);
    const data = new URLSearchParams(LaForm)

fetch("https://reqres.in/api/users", {
    method: 'POST',
    // headers:{
    //     'content-Type': 'application/json',
        body: data
    }).then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

})



