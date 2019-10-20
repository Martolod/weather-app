import React from 'react';
import Button from './Button';
import '../styles/WeatherList.css'

/**
 * Weather list component
 */
class WeatherList extends React.Component {

  constructor(props) {
    super(props);
    this.weatherItem = this.weatherItem.bind(this)
  }

  weatherItem(item) {
    return <div key={item.id} className="weather-item">
      <div>{item.name}</div>
      <div>
        <Button 
          text={item.active ? 'Delete' : 'Restore'} 
          onClick={() => this.props.toggleActive(item.id)}
        />
      </div>
    </div>
    
  }

  render() {
    return (
      <div>
        {this.props.weather.map(item => this.weatherItem(item))}
      </div>
    );
  }
}

export default WeatherList;