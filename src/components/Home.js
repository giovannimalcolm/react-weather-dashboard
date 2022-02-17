import React, { Component } from 'react';

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

_showWeather = (bool) => {
    this.setState({
        showWeather: bool
    });
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
                        {this.state.showWeather &&
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
                }
                    </div>
                </div>
                
               
            </div>

        )


    }

}
