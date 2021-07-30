import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Ciudad = ({ ciudad }) => {
    return ( 
        <div align="center" className="border border-info" style="max-width: 18rem;" style= {
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
            <div className="border border-info">
                <p></p> 
                <p> <img className = 'img' src = 'https://w7.pngwing.com/pngs/792/99/png-transparent-computer-icons-international-mother-language-day-location-black-and-white-line.png' /> </p>
                Ubicacion: Tessei, Buenos Aires
                <p></p>
            </div>

            <div className="border border-info">
                <p></p>
                <p><img className = 'img' src = 'https://previews.123rf.com/images/jemastock/jemastock1710/jemastock171004157/87574139-term%C3%B3metro-temperatura-icono-imagen-vector-ilustraci%C3%B3n-dise%C3%B1o-blanco-y-negro.jpg'/> </p>
                Temperatura: {ciudad.temp}
                <p></p>
            </div>

            <div className="border border-info">
                <p></p>
                <p><img className = 'img' src = 'https://thumbs.dreamstime.com/b/icono-del-vector-del-porcentaje-de-la-humedad-ejemplo-blanco-y-negro-de-la-humedad-alta-icono-linear-s%C3%B3lido-del-tiempo-92782975.jpg'/> </p>
                Humedad: {ciudad.humidity}
                <p></p>
            </div>

            <div className="border border-info">
                <p></p>
                <p><img className = 'img' src = 'https://w7.pngwing.com/pngs/877/400/png-transparent-computer-icons-wind-weather-wind-text-meteorology-black-and-white.png'/> </p>
                Viento: {ciudad.wind}
                <p></p>
            </div>

            <div className="border border-info">
                <p></p>
                <p><img className = 'img' src = 'https://illustoon.com/photo/2731.png'/> </p>
                Nubes: {ciudad.clouds}
                <p></p>
            </div>
        </div>
     );
}

export default Ciudad;