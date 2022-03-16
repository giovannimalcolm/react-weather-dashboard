import React from 'react';

function History(props) {

    return(
        <div>
            <button onClick={e => {
                props.getWeather(props.history)
                props.changeSubmission(props.history)
                props.setLocalStorage(props.history)
            }} className="historyItem inHistory" data-search={props.history} aria-controls="today">{props.history}</button>
        </div>
    )
}

export{
    History
}