import React from 'react';
import './Button.css';

/**
 * Button component
 * @param text - text for button
 * @param onClick - click handler
 * @param className - additional class (optional)
 * @param disabled - (optional)
 */
class Button extends React.Component {

  constructor(props) {
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
  }

  /** Button click handler */
  onClickButton() {
    if (this.props.disabled) {
      return;
    }
    this.props.onClick();
  }

  render() {
    return (
      <div
        onClick={this.onClickButton}
        className={`weather-button
          ${this.props.className ? this.props.className : ''}
          ${this.props.disabled ? 'weather-button_disabled' : ''
        }`
      }>
        <div className="weather-button_text">
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Button
