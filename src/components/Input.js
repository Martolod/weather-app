import React from 'react';
import '../styles/Input.css';

/**
 * Input component
 */
class Input extends React.Component {
  render() {
    return (
      <input 
        value={this.props.value}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
        className="weather-input"
        type="text" 
    ></input>
    );
  }
}

export default Input;