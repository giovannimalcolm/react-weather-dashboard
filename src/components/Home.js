import React, { useEffect, useState } from 'react';
import { Weather } from '../components/TodaysWeather'
import { getWeatherData } from '../service/getWeather';
import { GetWeatherUrl } from '../service/getWeatherUrl';


function Home(props) {

    const [showWeather, setShowWeather] = useState(false);
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
    };

    const changeInputState = (e) => {
        setInput(e.target.value);
    };

    const getWeather= async(location) => {
        setData(await getWeatherData(location)); 
        setShowWeather(true);
    };

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
            {showWeather && <Weather/>}
        </div>
    );

}

export {

    Home}