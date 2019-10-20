import { connect } from 'react-redux';
import Modal from '../components/Modal/Modal';
import { toggle, openModal, closeModal } from '../actions';

const mapStateToProps = state => {
  console.log(state.modal);
  return ({
    modal: state.modal
  });
};

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  toggleActive: id => dispatch(toggle(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)


