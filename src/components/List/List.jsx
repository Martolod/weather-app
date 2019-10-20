import React from 'react';
import Button from '../Button/Button';
import './List.css'

/**
 * Weather list component
 */
class List extends React.Component {

  constructor(props) {
    super(props);
    this.weatherItem = this.weatherItem.bind(this);
  }

  toggleItemActive(item) {
    if (item.active) {
      this.props.openConfirmModal(item);
      console.log('openModal');
    } 
    this.props.toggleActive(item.id);
  }

  weatherItem(item) {
    return <div key={item.id} className="weather-item">
      <div>{item.name}</div>
      <div>
        <Button 
          text={item.active ? 'Delete' : 'Restore'} 
          onClick={(item) => this.toggleItemActive(item)}
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

export default List;