
import React from 'react'
import ReactModal from 'react-modal';
import ModalChange from './ModalChange';
import Button from '../Button/Button';
import './Modal.css'
import { ModalConfirm } from './ModalConfirm';

export const modalTypes = {
  confirm: 'confirm',
  change: 'change'
}

class Modal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      modalType: null,
      item: {}
    };
    this.close = this.close.bind(this);
    this.confirm = this.confirm.bind(this);
    this.change = this.change.bind(this);
  }

  close() {
    this.props.closeModal();
  }

  confirm() {
    this.props.toggleActive(this.state.item.id);
    this.close();
  }

  change({name, temp}) {
    this.props.change({
      id: this.state.item.id,
      name: name,
      temp: temp
    });
    this.close();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        modalType: nextProps.modal.modalType,
        modalIsOpen: nextProps.modal.isOpen,
        item: nextProps.modal.modalProps.item ? nextProps.modal.modalProps.item : {}
      })
    }
  }

  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          ariaHideApp={false}
          className="weather-modal__dialog"
        >
          {
            this.state.modalType === modalTypes.change
              ? <ModalChange item={this.state.item} change={this.change} close={this.close}/>
              : <ModalConfirm item={this.state.item} confirm={this.confirm} close={this.close}/>
          }
        </ReactModal>
      </div>
    )
  }
}

export default Modal
