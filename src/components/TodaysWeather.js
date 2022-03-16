import React from 'react';
import { uviColorFind } from "../utils/uviColorFinder";

function Weather (props) {
   let uviColor =  uviColorFind(props.uvi)
    return( 
        <div>
            
        <section id="presentDay" className="todaysWeather">
            <div className="todaysWeather-body">
                <h2 className="h3 today-title"> {props.cityName} <img className="weather-img" src={"https://openweathermap.org/img/w/" + props.icon + ".png"} alt= {props.alt} /></h2>
                <p className="today-txt">Temp: {props.temp} °F </p>
                <p className="today-txt">Wind: {props.wind_speed} MPH</p>
                <p className="today-txt">Humidity: {props.humidity}%</p>
                <p>UV  Index: <button className={"uvi-btn " + uviColor}>{props.uvi}</button>
                </p></div>
        </section>
        </div>
    )

}

export{
    Weather
}