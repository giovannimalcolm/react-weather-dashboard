import { GetWeatherUrl } from "../service/getWeatherUrl";
import Axios from 'axios';
import React, { Component } from 'react';
export class Weather extends Component {

    state = {
        loading: true,
        weather: []
    }

async componentDidMount(){
    const res = await Axios.get(GetWeatherUrl());
    this.setState({weather: res.data, loading: false})
    console.log(this.state.weather);
}


render(){
   
    return( 
        <div>
            <div className="col-lg-9 pb-3">
        <section id="presentDay" className="todaysWeather">
            <div className="todaysWeather-body">
                <h2 className="h3 today-title"> San Diego <img className="weather-img" src="https://openweathermap.org/img/w/03d.png" alt="scattered clouds" /></h2>
                <p className="today-txt">Temp: </p>
                <p className="today-txt">Wind: 11.5 MPH</p>
                <p className="today-txt">Humidity: 61 %</p>
                <p>UV  Index: <button className="uvi-btn wary-uvi">3.1</button>
                </p></div>
        </section>
        </div>
        </div>

    )

}

}

