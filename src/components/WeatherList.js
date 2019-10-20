import React from 'react';

/**
 * Weather list component
 */
class WeatherList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.weather.map(item => <div key={item.id}>{item.name}</div>)}
      </div>
    );
  }
}

export default WeatherList;