import React from 'react';
import { getWeatherData } from '../service/getWeather';

function History(props) {

    const handleClick = (e) => {
        getWeatherData(e.target.value)
    }

    return(
        <div>
            <button onClick={e => {
                getWeatherData(props.history)
            }} className="historyItem inHistory" data-search={props.history} aria-controls="today">{props.history}</button>
        </div>
    )
}

export{
    History
}

