import React from 'react';
import './App.css';
import WeatherForm from '../../containers/WeatherForm';
import Tabs from '../Tabs/Tabs';
import WeatherModal from '../../containers/WeatherModal';

export const App = () => {
  return (
    <div className="weather-app">
      <div className="weather-widget">
        <div className="weather-widget__form-wrapper">
          <WeatherForm/>
        </div>
        <Tabs/>
      </div>
      <WeatherModal/>
    </div>
  );
}

export default App;