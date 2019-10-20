import React from 'react';
import './Button.css';

/**
 * Button component 
 * @param text - text for button
 * @param onClick - click handler
 */
export const Button = ({text, onClick}) => { 
  return (<div onClick={onClick} className="weather-button">
    <div className="weather-button_text">
      {text}
    </div>
  </div>)
}

export default Button
