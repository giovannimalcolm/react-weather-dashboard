import Axios from 'axios';

const weatherApiRootUrl = 'https://api.openweathermap.org';
const weatherApiKey = 'd91f911bcf2c0f925fb6535547a5ddc9';

//Uses user city input to generate the API call link for weather data
export async function GetWeatherUrl(loc) {
    const response = await Axios.get(`${weatherApiRootUrl}/geo/1.0/direct?q=${loc}&limit=5&appid=${weatherApiKey}`);
    return `${weatherApiRootUrl}/data/2.5/onecall?lat=${response.data[0].lat}&lon=${response.data[0].lon}&units=imperial&exclude=minutely,hourly&appid=${weatherApiKey}`;
}

