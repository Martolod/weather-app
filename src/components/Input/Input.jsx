import React from 'react';
import './Input.css';

/**
 * Input component
 */
export const Input = ({value, placeholder, onChange, className=''}) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`weather-input ${className}`}
      type="text"
    ></input>
  );
}

export default Input;
