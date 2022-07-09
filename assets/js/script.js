const response = fetch ("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=d767ae434eaf5dc9bdfbf679add804dd");
console.log(response);
const myKey = "e6bf3729b8121cbb851956e56285ec51";
const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=d767ae434eaf5dc9bdfbf679add804dd'

// window.onload = function() {
//     document.cookie.split(';').some((item) => {
//         if (item.trim().startsWith("weather=")) {
//             var lastSearch = item.trim().split('=')[1];
//             weather.getCoords(lastSearch);
//         }
//     });
// };

// function to convert kelvins to fahrenheit
function kToF(getTemp) 
{

    var kToFahr = (getTemp * 1.8) - 459.67;
    var message = 'Fahrenheit is'+ ' ' + kToFahr;
        console.log(message);
        return (Math.round(kToFahr));
    }

function kToF(getFeelsLike) 
{

    var kToFahr = (getFeelsLike * 1.8) - 459.67;
    var message = 'Fahrenheit is'+ ' ' + kToFahr;
        console.log(message);
        return (Math.round(kToFahr));
    }





document.querySelector("#search-button").addEventListener("click", function () {
    
    console.log("works");
    search();
    
});

// search button function
function search() {
    const city =  document.querySelector("#search").value 
    // store search cookie
    // document.cookie = "weather="+document.querySelector("#search").value;

    fetch ("http://api.openweathermap.org/geo/1.0/direct?q=" 
        + city + "&limit=5&appid=" + myKey)
    .then(response => response.json())
    .then(data => {
        console.log(data) 
        var getLat = data[0].lat
        var getLon = data[0].lon
        getCoords(getLat, getLon);
        getDayOne(getLat, getLon);
        getDayTwo(getLat, getLon);
        getDayThree(getLat, getLon);
        getDayFour(getLat, getLon);
        getDayFive(getLat, getLon);
    })
};

// function kToF() 
// {
//     fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     var getTemp = data.current.temp
//     var kToFahr = (getTemp * 1.8) - 459.67;
//     var message = 'Fahrenheit is' + kToFahr;
//         console.log(message);
    
//     })
// };

// turn city into coords for fetch and display current weather
function getCoords(lat, lon) {
    fetch ("https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon="+ lon +"&exclude=hourly&appid=d767ae434eaf5dc9bdfbf679add804dd")
    .then(response => response.json())
    .then(data => {
        console.log(data) 

        var getFeelsLike =data.current.feels_like;
        console.log(getFeelsLike);
        var feelsLike = kToF(getFeelsLike);
        console.log(feelsLike);

        var getCurrentWeather = data.current.weather[0].description;
        console.log(getCurrentWeather);
        
        var icon = data.current.weather[0].icon;
        console.log(icon);
        
        
        var getTemp =data.current.temp;
        console.log(getTemp);
        var Temperature = kToF(getTemp);
        console.log(Temperature);

        var getCurrentHumid = data.current.humidity;
        console.log(getCurrentHumid);

        var getWind = data.current.wind_speed;
        console.log(getWind)
        
        var getUV = data.current.uvi;
        console.log(getUV);


        

        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        
        document.querySelector("#currentWeather").innerText= getCurrentWeather;
        document.querySelector("#currentFeels").innerText= feelsLike;
        document.querySelector("#currentHumid").innerText= getCurrentHumid;
        document.querySelector("#currentTemp").innerText= Temperature;
        document.querySelector('#windspeed').innerText= getWind;
        document.querySelector("#currentUV").innerText= getUV
    })
};

//  day 1s forecast
function getDayOne(lat, lon) {
    fetch ("https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon="+ lon +"&exclude=hourly&appid=d767ae434eaf5dc9bdfbf679add804dd")
    .then(response => response.json())
    .then(data => {
        console.log(data) 

        var getFeelsLike =data.daily[1].feels_like.day;
        console.log(getFeelsLike);
        var feelsLike = kToF(getFeelsLike);
        console.log(feelsLike);

        var getWeather = data.daily[1].weather[0].description;
        console.log(getWeather);

        var icon = data.daily[1].weather[0].icon;
        console.log(icon);

        var getTemp =data.daily[1].temp.day;
        console.log(getTemp);
        var Temperature = kToF(getTemp);
        console.log(Temperature);

        var getHumid = data.daily[1].humidity;
        console.log(getHumid);

        var getWind = data.daily[1].wind_speed;
        console.log(getWind)

        var getUV = data.daily[1].uvi;

        document.querySelector(".icon1").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector("#dayOneUV").innerText= getUV;
        document.querySelector("#dayOneWeather").innerText= getWeather;
        document.querySelector("#dayOneFeels").innerText= feelsLike;
        document.querySelector("#dayOneHumid").innerText= getHumid;
        document.querySelector("#dayOneTemp").innerText= Temperature;
        document.querySelector('#dayOneWindSpeed').innerText= getWind;
    })
}

// day 2s function
function getDayTwo(lat, lon) {
    fetch ("https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon="+ lon +"&exclude=hourly&appid=d767ae434eaf5dc9bdfbf679add804dd")
    .then(response => response.json())
    .then(data => {
        console.log(data) 

        var getFeelsLike =data.daily[2].feels_like.day;
        console.log(getFeelsLike);
        var feelsLike = kToF(getFeelsLike);
        console.log(feelsLike);

        var getWeather = data.daily[2].weather[0].description;
        console.log(getWeather);

        var getTemp =data.daily[2].temp.day;
        console.log(getTemp);
        var Temperature = kToF(getTemp);
        console.log(Temperature);

        var icon = data.daily[2].weather[0].icon;
        console.log(icon);

        var getHumid = data.daily[2].humidity;
        console.log(getHumid);

        var getWind = data.daily[2].wind_speed;
        console.log(getWind)

        var getUV = data.daily[2].uvi;

        document.querySelector(".icon2").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector("#dayTwoUV").innerText= getUV;
        document.querySelector("#dayTwoWeather").innerText= getWeather;
        document.querySelector("#dayTwoFeels").innerText= feelsLike;
        document.querySelector("#dayTwoHumid").innerText= getHumid;
        document.querySelector("#dayTwoTemp").innerText= Temperature;
        document.querySelector('#dayTwoWindSpeed').innerText= getWind;
    })
}

// day 3 function
function getDayThree(lat, lon) {
    fetch ("https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon="+ lon +"&exclude=hourly&appid=d767ae434eaf5dc9bdfbf679add804dd")
    .then(response => response.json())
    .then(data => {
        console.log(data) 

        var getFeelsLike =data.daily[3].feels_like.day;
        console.log(getFeelsLike);
        var feelsLike = kToF(getFeelsLike);
        console.log(feelsLike);

        var getWeather = data.daily[3].weather[0].description;
        console.log(getWeather);

        var getTemp =data.daily[3].temp.day;
        console.log(getTemp);
        var Temperature = kToF(getTemp);
        console.log(Temperature);

        var icon = data.daily[3].weather[0].icon;
        console.log(icon);

        var getHumid = data.daily[3].humidity;
        console.log(getHumid);

        var getWind = data.daily[3].wind_speed;
        console.log(getWind)

        var getUV = data.daily[3].uvi;

        document.querySelector(".icon3").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector("#dayThreeUV").innerText= getUV;
        document.querySelector("#dayThreeWeather").innerText= getWeather;
        document.querySelector("#dayThreeFeels").innerText= feelsLike;
        document.querySelector("#dayThreeHumid").innerText= getHumid;
        document.querySelector("#dayThreeTemp").innerText= Temperature;
        document.querySelector('#dayThreeWindSpeed').innerText= getWind;
    })
}

// day 4
function getDayFour(lat, lon) {
    fetch ("https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon="+ lon +"&exclude=hourly&appid=d767ae434eaf5dc9bdfbf679add804dd")
    .then(response => response.json())
    .then(data => {
        console.log(data) 

        var getFeelsLike =data.daily[4].feels_like.day;
        console.log(getFeelsLike);
        var feelsLike = kToF(getFeelsLike);
        console.log(feelsLike);

        var getWeather = data.daily[4].weather[0].description;
        console.log(getWeather);

        var getTemp =data.daily[4].temp.day;
        console.log(getTemp);
        var Temperature = kToF(getTemp);
        console.log(Temperature);

        var icon = data.daily[4].weather[0].icon;
        console.log(icon);

        var getHumid = data.daily[4].humidity;
        console.log(getHumid);

        var getWind = data.daily[4].wind_speed;
        console.log(getWind)

        var getUV = data.daily[4].uvi;

        document.querySelector(".icon4").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector("#dayFourUV").innerText= getUV;
        document.querySelector("#dayFourWeather").innerText= getWeather;
        document.querySelector("#dayFourFeels").innerText= feelsLike;
        document.querySelector("#dayFourHumid").innerText= getHumid;
        document.querySelector("#dayFourTemp").innerText= Temperature;
        document.querySelector('#dayFourWindSpeed').innerText= getWind;
    })
}

// day 5
function getDayFive(lat, lon) {
    fetch ("https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon="+ lon +"&exclude=hourly&appid=d767ae434eaf5dc9bdfbf679add804dd")
    .then(response => response.json())
    .then(data => {
        console.log(data) 

        var getFeelsLike =data.daily[5].feels_like.day;
        console.log(getFeelsLike);
        var feelsLike = kToF(getFeelsLike);
        console.log(feelsLike);

        var getWeather = data.daily[5].weather[0].description;
        console.log(getWeather);

        var getTemp =data.daily[5].temp.day;
        console.log(getTemp);
        var Temperature = kToF(getTemp);
        console.log(Temperature);

        var getHumid = data.daily[5].humidity;
        console.log(getHumid);

        var icon = data.daily[5].weather[0].icon;
        console.log(icon);

        var getWind = data.daily[5].wind_speed;
        console.log(getWind)

        var getUV = data.daily[5].uvi;

        document.querySelector(".icon5").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector("#dayFiveUV").innerText= getUV;
        document.querySelector("#dayFiveWeather").innerText= getWeather;
        document.querySelector("#dayFiveFeels").innerText= feelsLike;
        document.querySelector("#dayFiveHumid").innerText= getHumid;
        document.querySelector("#dayFiveTemp").innerText= Temperature;
        document.querySelector('#dayFiveWindSpeed').innerText= getWind;
    })
}