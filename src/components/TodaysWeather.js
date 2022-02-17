import React, { Component } from 'react';

export class TodaysWeather extends Component {

    state = {
        loading: true,
        weather: null,
    };

    async componentDidMount() {
        const url = 'https://api.openweathermap.org';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ weather: data.results[0] });
        console.log(data)
    };



    render() {
        return (
            <>
                {this.state.loading || !this.state.weather ? (
                    <div> loading...</div>
                ) : (
                    <section id="presentDay" className="todaysWeather">
                        <div className="todaysWeather-body">
                            <h2 className="h3 today-title"> San Diego <img className="weather-img" src="https://openweathermap.org/img/w/03d.png" alt="scattered clouds" /></h2>
                            <p className="today-txt">Temp: {this.state.weather.current.temp}</p>
                            <p className="today-txt">Wind: 11.5 MPH</p>
                            <p className="today-txt">Humidity: 61 %</p>
                            <p>UV  Index: <button className="uvi-btn wary-uvi">3.1</button>
                            </p></div>
                    </section>




                )}
            </>
        )
    }
}

