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
    console.log(12345, props);
    this.weatherItem = this.weatherItem.bind(this);
  }

  openModal() {
    this.props.openModal({
      modalType: Modal,
      modalProps: null
    });
  }


  weatherItem(item) {
    return <div key={item.id} className="weather-row">
      <div className="weather-cell">{item.name}</div>
      <div className="weather-cell">{item.temp}&#8451;</div>
      <div className="weather-cell">
        <Button 
          text={item.active ? 'Delete' : 'Restore'} 
          onClick={() => item.active ? this.openModal('confirm') : this.props.toggleActive(item.id)}
        />
      </div>
        { this.props.showMoveButtons ?
            <div className="weather-cell">
              <Button  text="Up" onClick={() => this.props.moveUp(item.id)} />
            </div> : ''
        }
        {
          this.props.showMoveButtons ? 
          <div className="weather-cell">
            <Button text="Down" onClick={() => this.props.moveDown(item.id)} />
          </div> : ''
        }
       
    </div>
    
  }

  render() {
    return (
      <div class="weather-table">
        {this.props.weather.map(item => this.weatherItem(item))}
      </div>
    );
  }
}

export default List;