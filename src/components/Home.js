import React, { Component } from 'react';
import {Weather} from '../components/TodaysWeather'
import { getWeatherData } from '../service/getWeather';
import { GetWeatherUrl } from '../service/getWeatherUrl';

export class Home extends Component {
constructor(props){
    super(props);
    this.state = {
        location: "",
        showWeather: false
    };
    this.locationChange = this.locationChange.bind(this);
}

 onSubmit(e) {
    e.preventDefault();
}

locationChange(e){
    this.setState({
        location: e.target.value
    });
}

_showWeather = async (bool) => {
    this.setState({
        showWeather: bool
    });
    await getWeatherData(this.state.location)
console.log(await GetWeatherUrl(this.state.location))
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

                            <form onSubmit={e => this.onSubmit(e)} id="citySearch">
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
                                    onClick={this._showWeather.bind(null,true)}
                                >
                                    Search
                                </button>
                            </form>
                            <div id="history"></div>
                        </aside>
                    </div>
                </div>
                
               
            </div>

        )


    }

}
