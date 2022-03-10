import React, { useEffect, useState } from 'react';
import { Weather } from '../components/TodaysWeather'
import { getWeatherData } from '../service/getWeather';
import { GetWeatherUrl } from '../service/getWeatherUrl';
import { dateConvert } from '../utils/dateConvert';
import { Forecast } from './Forecast';


function Home(props) {

    const [showWeather, setShowWeather] = useState(false);
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);
    const [submission, setSubmission] = useState("")


    const onSubmit = (e) => {
        e.preventDefault();
    };

    const changeInputState = (e) => {
        setInput(e.target.value);
    };

    const getWeather = async (location) => {
        setData(await getWeatherData(location));
        setShowWeather(true);
    };

    const saveSubmission = (input) => {
        return (input.split(',').shift())
    }

    useEffect(() => {
        console.log(data);

    }, [showWeather, data]);

    return (
        <div>
            <header className="main-header">
                <h1>Weather Dashboard</h1>
            </header>

            <div className="container-fluid" style={{ maxWidth: '1400px' }}>
                <div className="row">
                    <aside className="col-lg-3 pb-3">
                        <h2 id="sidebar-title">Search for a City:</h2>

                        <form onSubmit={e => {
                            onSubmit(e)
                            getWeather(input)
                            setSubmission(saveSubmission(input))
                        }} id="citySearch">
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="City Here"
                                    id="city-input"
                                    onChange={changeInputState}
                                />

                                <div className="input-group-append"></div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                id="sidebar-btn"
                            >
                                Search
                            </button>
                        </form>
                        <div id="history"></div>
                    </aside>
                </div>
            </div>
            {showWeather &&
                <Weather
                    temp={data.current.temp}
                    wind_speed={data.current.wind_speed}
                    humidity={data.current.humidity}
                    uvi={data.current.uvi}
                    cityName={submission}
                    icon={data.current.weather[0].icon}
                    alt={data.current.weather[0].description}
                />
            }

            {showWeather && data.daily.map((day, index) => {
                if (index > 0 && index <= 5) { 
                return(
                    <Forecast
                    key={index}
                    temp ={day.temp.day}
                    humidity ={day.humidity}
                    wind_speed ={day.wind_speed}
                    icon ={day.weather[0].icon}
                    alt ={day.weather[0].description}
                    timezone = {day.timezone}
                    date= {day.dt}
                    />
                )
                }})}
         
        </div>
    );
                
}

export {

    Home
}