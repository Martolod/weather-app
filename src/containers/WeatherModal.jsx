import { connect } from 'react-redux';
import Modal from '../components/Modal/Modal';
import { toggle, change, closeModal } from '../actions';

const mapStateToProps = state => {
  return ({
    modal: state.modal
  });
};

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  toggleActive: id => dispatch(toggle(id)),
  change: ({id, name, temp}) => dispatch(change({id, name, temp}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)


