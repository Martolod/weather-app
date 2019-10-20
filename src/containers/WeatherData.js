import { connect } from 'react-redux';
import WeatherList from '../components/WeatherList';
import { toggleActive, filterTypes } from '../actions';

function getFiltredData(state, param) {
  switch (param.filter) {
    case 'ACTIVE':
      return state.weather.filter(el => el.active);
    case 'DELETED':
      return state.weather.filter(el => !el.active);
    default:
      return state.weather;
  }
}

const mapStateToProps = (state, param) => ({
  weather: getFiltredData(state, param)
})

const mapDispatchToProps = dispatch => ({
  toggleActive: id => dispatch(toggleActive(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherList)


