import './App.css';
import React from 'react';
import Ciudad from './components/Ciudad';

function App() { 
  return (
    <div className="container">
      <header>
      <img className='cabecera' src="https://resizer.glanacion.com/resizer/J0cCJjYfXh_-iPQ2U1cS4_HOGPE=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/BAEK27MGRZBXPEU6C6XIBUOCCI.jpg"/>
      </header>
      <div className="col">
        <Ciudad
        />
      </div>
    </div>
  );
}

export default App;

