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

  openModal(type, props) {
    this.props.openModal({
      modalType: type,
      modalProps: props
    });
  }


  weatherItem(item) {
    return <div key={item.id} className="weather-row">
      <div
        onClick={() => this.openModal('change', {item})}
        className="weather-cell weather-cell_pointer"
      >
        {item.name}
      </div>
      <div
        onClick={() => this.openModal('change', {item})}
        className="weather-cell weather-cell_pointer"
      >
        {item.temp}&#8451;
      </div>
      <div className="weather-cell">
        <Button
          className={item.active ? 'weather-button_warn' : 'weather-button_calm '}
          text={item.active ? 'Delete' : 'Restore'}
          onClick={() => item.active
            ? this.openModal('confirm', {item})
            : this.props.toggleActive(item.id)
          }
        />
      </div>

        { this.props.showMoveButtons ?
            <div className="weather-cell">
              <Button
                text="Up"
                onClick={() => this.props.moveUp(item.id)}
              />
            </div> : ''
        }
        {
          this.props.showMoveButtons ?
          <div className="weather-cell">
            <Button
              text="Down"
              onClick={() => this.props.moveDown(item.id)}
            />
          </div> : ''
        }

    </div>

  }

  render() {
    return (
      <div className="weather-table">
        {this.props.weather.map(item => this.weatherItem(item))}
      </div>
    );
  }
}

export default List;
