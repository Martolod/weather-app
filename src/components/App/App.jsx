import React from 'react';
import './App.css';
import FormData from '../../containers/WeatherForm';
import Tabs from '../Tabs/Tabs';

export const App = () => {
  return (
    <div>
      <FormData/>
      <Tabs/>
    </div>
  );
}

export default App;