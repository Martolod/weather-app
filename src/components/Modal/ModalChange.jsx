
import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

/**
 * Modal for change city weather
 */
class ModalChange extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.item.name,
      temp: this.props.item.temp,
    }
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeTemp = this.onChangeTemp.bind(this);
  }

  /** Name input onChange handler */
  onChangeName(event) {
    this.setState({name: event.target.value});
  }

  /** Temperature input onChange handler */
  onChangeTemp(event) {
    this.setState({temp: event.target.value});
  }

  render() {
    return (
      <div>
        Edit city weather:
        <div className="modal-change__input-wrapper">
          <Input
            onChange={this.onChangeName}
            value={this.state.name}
            placeholder="City name"
            className="weather-input_width-200"
          />
          <Input
            onChange={this.onChangeTemp}
            value={this.state.temp}
            placeholder="Temperature"
            className="weather-input_width-100"
          />
        </div>
        <div className="weather-modal__button-wrapper">
          <Button
            text="Change"
            onClick={() => this.props.change(this.state)}
            className="weather-button_warn"
            disabled={this.state.name.length === 0 || this.state.temp.length === 0}
          />
          <Button
            text="Cansel"
            onClick={this.props.close}
          />
        </div>
      </div>
    )
  }
}

export default ModalChange
