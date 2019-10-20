import { connect } from 'react-redux';
import List from '../components/List/List';
import { toggle, up, down, openModal, closeModal } from '../actions';

/**
 * Фильтруем данные в зависимости от выбранной вкладки
 */
function _getFiltredData(state, props) {
  console.log(props);
  switch (props.filter) {
    case 'ACTIVE':
      return state.weather.filter(el => el.active);
    case 'DELETED':
      return state.weather.filter(el => !el.active);
    default:
      return state.weather;
  }
}

const mapStateToProps = (state, props) => ({
  weather: _getFiltredData(state, props),
  showMoveButtons: props.filter === undefined
})

const mapDispatchToProps = dispatch => ({
  toggleActive: id => dispatch(toggle(id)),
  moveUp: id => dispatch(up(id)),
  moveDown: id => dispatch(down(id)),
  openModal: ({ modalType, modalProps }) => dispatch(openModal({modalType, modalProps})),
  closeModal: () => dispatch(closeModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)


