//API Linking
import dayjs from 'dayjs';
var weatherApiRootUrl = 'https://api.openweathermap.org';
var weatherApiKey = 'd91f911bcf2c0f925fb6535547a5ddc9';
var cityListApiRootUrl = 'https://api.mapbox.com';
var cityListApiKey = 'pk.eyJ1IjoiZ2lvdmFubmlkbSIsImEiOiJja3praTUxcXkwa2F3MnVxa29ueDMzeTBkIn0.MUPEcujgw5Gic8LPSZiQ9Q';


//Timezone plugins 
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

//Elements & Global Vars
var cityInput = document.querySelector('#city-input') //input field when searching
var historyContainer = document.querySelector('#history') //search history list
var todayContainer = document.querySelector('#presentDay') //big container for todays weather
var searchHistory = [];
var searchBox = document.querySelector("#citySearch");
var forecastContainer = document.querySelector('#weekly')
var presentDay = document.querySelector('#presentDay');


//Function to pull history from user lcl storage
function getHistory() {
    var storedHistory = localStorage.getItem('history')
    if (storedHistory) {
        searchHistory = JSON.parse(storedHistory);
    }
    printHistory();
}

//Adds searches to lcl storage
function addHistory(input) {

    if (searchHistory.indexOf(input) !== -1) {
        return;
    }
    console.log(input)
    searchHistory.push(input);
    localStorage.setItem('history', JSON.stringify(searchHistory));
    printHistory();
}

//Renders history to page
function printHistory() {
   // historyContainer.innerHTML = '';
    console.log(searchHistory)
    for (var i = searchHistory.length - 1; i >= 0; i--) {
        var historyItem = document.createElement('button');
        historyItem.textContent = searchHistory[i];
        historyItem.classList.add('historyItem', 'inHistory')
        historyItem.setAttribute('data-search', searchHistory[i]);
        historyItem.setAttribute('aria-controls', 'today')
        historyContainer.append(historyItem);
    }
}

//Renders container box with todays weather for specified city
function printTodaysWeather(name, weather, timezone) {

    var temp = weather.temp;
    var windspd = weather.wind_speed;
    var humidity = weather.humidity;
    var { uvi } = weather;
    var icon = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    var iconCaption = weather.weather[0].description || weather[0].main;

    var box = document.createElement('div');
    var boxContent = document.createElement('div');
    var header = document.createElement('h2');
    var weatherImg = document.createElement('img');
    var tempEl = document.createElement('p');
    var windEl = document.createElement('p');
    var humidityEl = document.createElement('p');
    var uviEl = document.createElement('p');
    var uviBox = document.createElement('button');

    box.setAttribute('class', 'todaysWeather')
    boxContent.setAttribute('class', 'todaysWeather-body')
    box.append(boxContent);

    var date = dayjs().tz(timezone).format('M/D/YYYY');
    header.textContent = `${name} (${date})`;
    header.setAttribute('class', 'h3 today-title')
    weatherImg.setAttribute('class', 'weather-img')
    weatherImg.setAttribute('src', icon);
    weatherImg.setAttribute('alt', iconCaption);

    header.append(weatherImg)

    tempEl.textContent = `Temp: ${temp}°F`;
    tempEl.setAttribute('class', 'today-txt')
    windEl.textContent = `Wind: ${windspd} MPH`;
    windEl.setAttribute('class', 'today-txt')
    humidityEl.textContent = `Humidity: ${humidity} %`;
    humidityEl.setAttribute('class', 'today-txt')


    uviEl.textContent = 'UV  Index: ';
    uviBox.classList.add('uvi-btn');
    uviBox.textContent = uvi;

//Coloring for UVI box
    if (uvi < 3) {
        uviBox.classList.add('safe-uvi')
    }
    else if (uvi < 7) {
        uviBox.classList.add('wary-uvi')
    }
    else {
        uviBox.classList.add('danger-uvi')
    }

    uviEl.append(uviBox);

    boxContent.append(header, tempEl, windEl, humidityEl, uviEl);
    //todayContainer.innerHTML = '';
    todayContainer.append(boxContent);
}

//Creation of a singular forecast card
function createForecast(forecast, timezone) {
    var fDate = forecast.dt;
    var icon = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
    var iconCaption = forecast.weather[0].description;
    var temp = forecast.temp.day;
    var { humidity } = forecast;
    var { wind_speed } = forecast;

    var day = document.createElement('div');
    var fBox = document.createElement('div');
    var fBoxBody = document.createElement('div');
    var fBoxTitle = document.createElement('h5');
    var imgF = document.createElement('img');
    var tempEl = document.createElement('p');
    var windEl = document.createElement('p');
    var humidityEl = document.createElement('p');

    day.append(fBox);
    fBox.append(fBoxBody)
    fBoxBody.append(fBoxTitle, imgF, tempEl, windEl, humidityEl);


    day.classList.add('col-md', 'five-day-card');
    fBox.setAttribute('class', 'todaysWeather bg-primary h-90 text-white');
    fBoxBody.setAttribute('class', 'todaysWeather-body p-2')


    fBoxTitle.textContent = dayjs.unix(fDate).tz(timezone).format('M/D/YYYY');
    imgF.setAttribute('src', icon);
    imgF.setAttribute('alt', iconCaption);
    tempEl.textContent = `Temp: ${temp} °F`;
    windEl.textContent = `Wind: ${wind_speed} MPH`;
    humidityEl.textContent = `Humidity: ${humidity} %`;

    forecastContainer.append(day);

}

//Printing of 5 forecast cards
function printForecast(dailyData, timezone) {

    var begin = dayjs().tz(timezone).add(1, 'day').startOf('day').unix();
    var end = dayjs().tz(timezone).add(6, 'day').startOf('day').unix();

    var fHeader = document.createElement('div');
    var header = document.createElement('h4');

    fHeader.setAttribute('class', 'col-12');
    header.textContent = '5-Day Forecast:';
    fHeader.append(header);

    //forecastContainer.innerHTML = '';
    forecastContainer.append(fHeader);
    for (var i = 0; i < dailyData.length; i++) {
    
        if (dailyData[i].dt >= begin && dailyData[i].dt < end) {
            createForecast(dailyData[i], timezone);
        }
    }
}

//API call to get location data
function fetchLoc(fixedInput) {
    var requestURL = `${weatherApiRootUrl}/geo/1.0/direct?q=${fixedInput}&limit=5&appid=${weatherApiKey}`;
    fetch(requestURL)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            if (!data[0]) {
                alert('City not found');
            }
            else {
                console.log(fixedInput)
                addHistory(fixedInput);
                console.log(data)
                fetchWeather(data[0]);
            }
        })
        .catch(function (err) {
            console.error(err);
        });
}

//API call to get weather data
function fetchWeather(location) {
    console.log(location)

    var { lat } = location;
    var { lon } = location;
    var { name } = location;

    var requestURL = `${weatherApiRootUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${weatherApiKey}`;

    fetch(requestURL)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data)
            printEverything(name, data)
        })
        .catch(function (err) {
            console.error(err);
        });
}


//Renders all information requested
function printEverything(name, data) {
    printTodaysWeather(name, data.current, data.timezone);
    printForecast(data.daily, data.timezone);
}

//Pulls up data when clicked on button of past searched city
function historySearch(e) {
    if (!e.target.matches('.inHistory')) {
        return;
    }

    var hist = e.target;
    var histChosen = hist.getAttribute('data-search');
    fetchLoc(histChosen);

}

//Function to take user input for city and adjust it for API usage
function searchCity(e) {

    if (!cityInput.value) {
        return;
    }
    e.preventDefault();
    console.log(cityInput)
    var fixedInput = cityInput.value.trim();
    console.log(fixedInput)
    fetchLoc(fixedInput);
    cityInput.value = '';

    presentDay.setAttribute('class', 'todaysWeather');

}

//init functions for local storage and button event listeners
getHistory();
searchBox.addEventListener('submit', searchCity)
historyContainer.addEventListener('click', historySearch)

