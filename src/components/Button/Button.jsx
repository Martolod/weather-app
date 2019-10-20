import React from 'react';
import './Button.css';

/**
 * Button component 
 * @param text - text for button
 * @param onClick - click handler
 * @param className - additional class (optional)
 */
export const Button = ({text, onClick, className = ''}) => { 
  return (
    <div onClick={onClick} className={`weather-button ${className}`}>
      <div className="weather-button_text">
        {text}
      </div>
    </div>
  );
}

export default Button
