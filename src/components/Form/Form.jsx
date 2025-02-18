import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Form.css';
import axios from 'axios';

/**
 * Form component for weather widget
 */
class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      loading: '',
      error: '',
    };
    this.getWeather = this.getWeather.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  /** OnChange Input handler */
  onChangeInput(event) {
    this.setState({value: event.target.value});
  }

  /** Get weather data */
  getWeather() {
    if (this.state.loading) {
      return;
    }
    this.setState({loading: true});

    const apiKey = '9761ea4a64f7ebbcc0659db4bdd102e4';
    const apiUrl = 'https://api.openweathermap.org/data/2.5';

    axios.get(`${apiUrl}/weather?q=${this.state.value}&appid=${apiKey}&units=metric`)
      .then(response => {
        this.props.addWeatherData(response.data);
        this.setState({value: '', loading: false, error: ''});
      })
      .catch(error => {
        console.warn(error);
        this.setState({loading: false, error: error.message});
      });
  }

  render() {
    return (
      <div className="weather-form">
        <div className="weather-form__input-wrapper">
          <Input
            value={this.state.value}
            onChange={this.onChangeInput}
            placeholder="Enter the name of the city"
          />
          <div className="weather-form__info">
            { this.state.error ? <span className="weather-form__info_error">{this.state.error}</span> : '' }
          </div>
        </div>
        <Button
          text="Get weather"
          onClick={this.getWeather}
          disabled={this.state.value.length === 0 || this.state.loading}
        />
      </div>
    );
  }
}

export default Form;
