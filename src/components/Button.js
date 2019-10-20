import React from 'react';
import '../styles/Button.css';

/**
 * Button component 
 */
class Button extends React.Component { 

  render() {
    return (
      <div onClick={this.props.onClick} className="weather-button">
        <div className="weather-button_text">
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Button;
