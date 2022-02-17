import './css/bootstrap.min.css';
import './css/style.css';
import {fetchPlace} from './fetchPlace'
import React, { useState } from 'react'
import {Home} from './components/Home'

function App() {
  
  return(
    <div className="container">
      <Home/>
      </div>
  );
}


export default App;
