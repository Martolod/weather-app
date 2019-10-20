import React from 'react';
import Button from './Button';
import Input from './Input';
import '../styles/Form.css';

/**
 * Form component for weather widget
 */
class Form extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.onClickButton = this.onClickButton.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onClickButton() {
    console.log(this.state.value);
    this.props.addWeatherData(this.state.value);
    this.setState({value: ''});
  }

  onChangeInput(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="weather-form">    
        <div className="weather-form__input-wrapper">
          <Input value={this.state.value} onChange={this.onChangeInput} placeholder="город"/>
        </div>  
        <Button text="жмяк" onClick={this.onClickButton}/>
      </div>
    );
  }
}

export default Form;
