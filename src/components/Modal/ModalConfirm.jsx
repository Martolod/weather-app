
import React from 'react'
import Button from '../Button/Button';

export const ModalConfirm = ({item, confirm, close}) => {
  return (
    <div>
      <div>
        Do you really want to delete {item ? item.name : ''}?
      </div>
      <div className="weather-modal__button-wrapper">
        <Button
          text="Delete"
          onClick={confirm}
          className="weather-button_warn"
        />
        <Button
          text="Cansel"
          onClick={close}
        />
      </div>
    </div>
  );
}
