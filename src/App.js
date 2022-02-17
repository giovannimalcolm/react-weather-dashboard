import './css/bootstrap.min.css';
import './css/style.css';
import { fetchPlace } from './fetchPlace'
import React, { useState } from 'react'
import { Home } from './components/Home'
import Axios from 'axios'
import dayjs from 'dayjs';
//import { script } from './script'
//import { TodaysWeather } from './components/TodaysWeather';





function App() {
  
return (
  <div className="container">
    <Home />
    
  </div>
);
};


export default App;
