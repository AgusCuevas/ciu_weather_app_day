import './App.css';
import React from 'react';
import { useState } from 'react';
import Ciudad from './components/Ciudad';

function App() {
  
  let key = '591e65570d9b021b9b330b9d36a1bc61'
  const [ciudad, setCiudad] = useState([])
  const consultarAPI = async () => {
    try{
      const api = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=-34.5708&lon=-58.6243&exclude=current,hourly&appid=${key}`);
      const ciudad = await api.json();
      setCiudad(ciudad.result);
      } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="container">
      <header>
      <img className='cabecera' src="https://resizer.glanacion.com/resizer/J0cCJjYfXh_-iPQ2U1cS4_HOGPE=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/BAEK27MGRZBXPEU6C6XIBUOCCI.jpg"/>
      </header>
      <div className="col">
        {consultarAPI}
        <Ciudad
          ciudad= {ciudad}
        />
      </div>
    </div>
  );
}

export default App;
