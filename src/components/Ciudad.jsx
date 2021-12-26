import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Ciudad() {

    const [ubi, setUbi] = useState([])
    const [temp, setTemp]  = useState([]);
    const [hum, setHum]  = useState([]);
    const [viento, setViento]  = useState([]);
    const [nubes, setNubes]  = useState([]);

    let key = '591e65570d9b021b9b330b9d36a1bc61'

    const guardarDatos = async () => {
        let ciudad = document.getElementById('busqueda').value;
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}`)
            .then(response => {return response.json()})
            .then (data => {
                console.log(ciudad);
                console.log(data);
                setUbi(data.name);
                setTemp(Math.round(data.main.temp - 273.15));
                setHum(Math.round(data.main.humidity));
                setViento(Math.round(data.wind.speed * 1.609));
                setNubes(Math.round(data.clouds.all))
        })
    }
    return (      
        <div 
        align="center" className="border border-info" style="max-width: 18rem;" style= {
            {
                fontFamily: 'cursive',
                fontSize: '200%',
                width: '100%',
                borderRadius: '10%',
                color: "black",
                borderTopWidth: '5px',
                borderRightWidth:'5px',
                borderLeftWidth: '5px',
                borderBottomWidth: '5px',
            } 
        }>  
            <div>
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">Navbar</a>
                <form className="d-flex">
                <input className="form-control me-2"  placeholder="Search" aria-label="Search" id = 'busqueda'/>
                <button className="btn btn-outline-success" type="button" onClick={guardarDatos}>Search</button>
                </form>
            </div>
            </nav>
            </div>
            <div className="border border-info">
                <p></p> 
                <p> <img className = 'img' src = 'https://w7.pngwing.com/pngs/792/99/png-transparent-computer-icons-international-mother-language-day-location-black-and-white-line.png' /> </p>
                Ubicacion: {ubi}
                <p></p>
            </div>

            <div className="border border-info">
                <p></p>
                <p><img className = 'img' src = 'https://previews.123rf.com/images/jemastock/jemastock1710/jemastock171004157/87574139-term%C3%B3metro-temperatura-icono-imagen-vector-ilustraci%C3%B3n-dise%C3%B1o-blanco-y-negro.jpg'/> </p>
                Temperatura: {temp}°
                <p></p>
            </div>

            <div className="border border-info">
                <p></p>
                <p><img className = 'img' src = 'https://thumbs.dreamstime.com/b/icono-del-vector-del-porcentaje-de-la-humedad-ejemplo-blanco-y-negro-de-la-humedad-alta-icono-linear-s%C3%B3lido-del-tiempo-92782975.jpg'/> </p>
                Humedad: {hum}%
                <p></p>
            </div>

            <div className="border border-info">
                <p></p>
                <p><img className = 'img' src = 'https://w7.pngwing.com/pngs/877/400/png-transparent-computer-icons-wind-weather-wind-text-meteorology-black-and-white.png'/> </p>
                Viento: {viento} k/m
                <p></p>
            </div>

            <div className="border border-info">
                <p></p>
                <p><img className = 'img' src = 'https://illustoon.com/photo/2731.png'/> </p>
                Nubes: {nubes}%
                <p></p>
            </div>
        </div>
     );
}

export default Ciudad;