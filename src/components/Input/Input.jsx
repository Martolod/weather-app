import React from 'react';
import './Input.css';

/**
 * Input component
 */
export const Input = ({value, placeholder, onChange}) => {
  return (
    <input 
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="weather-input"
      type="text" 
    ></input>
  );
}

export default Input;