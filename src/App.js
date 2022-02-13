import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="main-header">
      <h1>Weather Dashboard</h1>
    </header>

    <div className="container-fluid" style="max-width: 1400px">
      <div className="row">
        <aside className="col-lg-3 pb-3">
          <h2 id="sidebar-title">Search for a City:</h2>

          <form id="citySearch">
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="City Here"
                id="city-input"
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

        <div className="col-lg-9 pb-3">
          <section id="presentDay"></section>

          <section id="weekly" className="weeklyForecast row"></section>
        </div>
      </div>
    </div>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.10.4/dayjs.min.js"
      integrity="sha512-0fcCRl828lBlrSCa8QJY51mtNqTcHxabaXVLPgw/jPA5Nutujh6CbTdDgRzl9aSPYW/uuE7c4SffFUQFBAy6lg=="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.10.4/plugin/utc.min.js"
      integrity="sha512-m00bfmYnAl3plEBlQfeQUhw/U2uvmw29V2+jxSWpAjankMWS+zAsjezbKWDEJNXqWq9o9qQZSOiA2RKDpa4D5w=="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.10.4/plugin/timezone.min.js"
      integrity="sha512-pslqxxHAYPCxaSeFSmXXxDkLejD5dbFVC66aiVq0z4v7VTJBU+wqcG1OpNh4p3MjS2D6NCwz/H2QmSc7dXxryg=="
      crossorigin="anonymous"
    ></script>
    <script src="./assets/js/script.js" async defer></script>
    </div>
  );
}

export default App;
