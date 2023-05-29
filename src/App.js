import React, { useState } from 'react';
import WeatherComponent from './Components/WeatherComponent';


const App = () => {
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the API or perform any other logic here using the "country" state value
  };

  return (
    
<div className='App'>
  <div className='container'>
    <div className='top'>
      <div className='location'>
        <p>Karachi</p>
        </div>
        <div className='temp'>
          <h1 className='bold'>60*F</h1>
      </div>
      <div className='discription'>
        <p>Clouds</p>
      </div>
    </div>
    <div className='bottom'>
      <div className='feel'>
        <p>65*F</p>
      </div>
      <div className='humidity'>
        <p className='bold'>20%</p>
        <p>20%</p>
        <p>Hmidity</p>
      </div>
      <div className='wind'>
        <p className='bold'>12 MPH</p>
        <p>Wind SpeedH</p>
      </div>
    </div>
  </div>
</div>
    
  );
};

export default App;
