
import React from 'react'
import ReactModal from 'react-modal';
import ModalConfirm from './ModalConfirm';
import ModalChange from './ModalChange';
import './Modal.css'

export const modalTypes = {
  confirm: 'confirm',
  change: 'change'
}

class Modal extends React.Component{
  constructor(props) {
    super(props);
    console.log(111, props);
    this.state = {
      modalIsOpen: false,
      modalType: null
    };
    this.closeModal = this.closeModal.bind(this)
  }

  closeModal() {
    this.props.closeModal();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        modalIsOpen: nextProps.modal.isOpen
      })
    }
  }

  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          // ariaHideApp={false}
          // className="weather-modal__dialog"
          // overlayClassName="weather-modal__overlay"
        > 
          {this.state.modalType === modalTypes.change ? <ModalChange/> : <ModalConfirm/>}
          <div onClick={this.closeModal}>СКРОЙСЫ</div>
        </ReactModal>
      </div>
    )
  } 
}

export default Modal