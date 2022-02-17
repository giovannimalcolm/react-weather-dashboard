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
    }

    

    render() {
        return (
            <div className="col-lg-9 pb-3">
                {this.state.loading || !this.state.weather ? (
                    <div> loading...</div>
                ) : (
                    <div>
                        <section id="presentDay" class="todaysWeather">
                            <div class="todaysWeather-body">
                                <h2 class="h3 today-title"> San Diego <img class="weather-img" src="https://openweathermap.org/img/w/03d.png" alt="scattered clouds"></h2>
                                <p class="today-txt">Temp: {this.state.weather.current.temp}</p>
                                <p class="today-txt">Wind: 11.5 MPH</p>
                                <p class="today-txt">Humidity: 61 %</p>
                                <p>UV  Index: <button class="uvi-btn wary-uvi">3.1</button>
                                </p></div></section>
                    </div>
                        }


                <section id="weekly" class="weeklyForecast row">
                    <div class="col-12">
                        <h4>5-Day Forecast:</h4>
                    </div>
                    <div class="col-md five-day-card">
                        <div class="todaysWeather bg-primary h-90 text-white">
                            <div class="todaysWeather-body p-2">
                                <h5>2/17/2022</h5>
                                <img src="https://openweathermap.org/img/w/01d.png" alt="clear sky">
                                    <p>Temp: 66.38 °F</p>
                                    <p>Wind: 8.32 MPH</p>
                                    <p>Humidity: 27 %</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md five-day-card">
                        <div class="todaysWeather bg-primary h-90 text-white">
                            <div class="todaysWeather-body p-2">
                                <h5>2/18/2022</h5>
                                <img src="https://openweathermap.org/img/w/01d.png" alt="clear sky">
                                    <p>Temp: 67.06 °F</p
                                    ><p>Wind: 10.85 MPH</p>
                                    <p>Humidity: 18 %</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md five-day-card">
                        <div class="todaysWeather bg-primary h-90 text-white">
                            <div class="todaysWeather-body p-2">
                                <h5>2/19/2022</h5>
                                <img src="https://openweathermap.org/img/w/04d.png" alt="overcast clouds">
                                    <p>Temp: 65.59 °F</p>
                                    <p>Wind: 8.23 MPH</p
                                    ><p>Humidity: 39 %</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md five-day-card">
                        <div class="todaysWeather bg-primary h-90 text-white">
                            <div class="todaysWeather-body p-2">
                                <h5>2/20/2022</h5>
                                <img src="https://openweathermap.org/img/w/01d.png" alt="clear sky">
                                    <p>Temp: 63.21 °F</p>
                                    <p>Wind: 9.84 MPH</p>
                                    <p>Humidity: 52 %</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md five-day-card">
                        <div class="todaysWeather bg-primary h-90 text-white">
                            <div class="todaysWeather-body p-2">
                                <h5>2/21/2022</h5>
                                <img src="https://openweathermap.org/img/w/10d.png" alt="light rain">
                                    <p>Temp: 55.85 °F</p>
                                    <p>Wind: 25.97 MPH</p>
                                    <p>Humidity: 64 %</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </div >

        )
    }
}
