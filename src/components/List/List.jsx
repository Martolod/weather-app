import React from 'react';
import Button from '../Button/Button';
import './List.css'
import Modal from '../Modal/Modal';

/**
 * Weather list component
 */
class List extends React.Component {

  constructor(props) {
    super(props);
    this.weatherItem = this.weatherItem.bind(this);
  }

  openModal() {
    this.props.openModal({
      modalType: Modal,
      modalProps: null
    });
  }


  weatherItem(item) {
    return <div key={item.id} className="weather-item">
      <div>{item.name}</div>
      <div>
        <Button 
          text={item.active ? 'Delete' : 'Restore'} 
          onClick={() => item.active ? this.props.toggleActive(item.id) :  this.openModal('confirm')}
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