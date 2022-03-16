import Axios from 'axios';
import { GetWeatherUrl } from './getWeatherUrl'

//Pulls and returns user-requested weather data. This includes current weather 
//as well as data from the past week.
export async function getWeatherData(loc) {
  const weatherUrl = await GetWeatherUrl(loc)
  const weatherUrlData = await Axios.get(weatherUrl);
  console.log(weatherUrlData.data)
  return weatherUrlData.data
}  
