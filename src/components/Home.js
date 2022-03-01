import React, { Component } from 'react';
import {Weather} from '../components/TodaysWeather'
import { getWeatherData } from '../service/getWeather';
import { GetWeatherUrl } from '../service/getWeatherUrl';


export class Home extends Component {
constructor(props){
    super(props);
    this.state = {
        location: "",
        showWeather: false,
        weatherData: []
    };
    this.locationChange = this.locationChange.bind(this);
    this._showWeather = this._showWeather.bind(this);

}

 onSubmit(e) {
    e.preventDefault();
}

locationChange(e){
    this.setState({
        location: e.target.value
    });
}

setWeather = async (location)=> {
   const res = await getWeatherData(location)
   console.log(res)
    this.setState({
        weatherData: res
    });
    console.log(this.state.weatherData)
}

_showWeather = async (bool) => {
    console.log(this.state)
    this.setState({
        showWeather: bool
    });
    console.log(this.state)
}

componentDidUpdate(){
    console.log(this.state)
}


    render() {
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
                                this.onSubmit(e)
                                this.setWeather(this.state.location)
                                this._showWeather(true)
                                }} id="citySearch">
                                <div className="input-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="City Here"
                                        id="city-input"
                                        onChange={this.locationChange }
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
               {this.state.showWeather && <Weather data={this.state.weatherData}/>}
            </div>

        )


    }

}
