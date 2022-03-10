import React from 'react';
import { dateConvert } from '../utils/dateConvert';

function Forecast (props) {
    return( 
        <div>
           
<div className="col-md five-day-card">
    <div className="todaysWeather bg-primary h-90 text-white">
        <div className="todaysWeather-body p-2">
            <h5>{dateConvert(props.date, props.timezone)}</h5>
            <img src={`https://openweathermap.org/img/w/${props.icon}.png`} alt="clear sky" />
            <p>Temp: {props.temp} </p>
            <p>Wind: {props.wind_speed} MPH</p>
            <p>Humidity: {props.humidity} %</p>
        </div>
    </div>
</div>
        </div>
    )

}

export{
    Forecast
}