import { connect } from 'react-redux';
import WeatherList from '../components/WeatherList';

const mapStateToProps = state => ({
  weather: state.weather
})


export default connect(
  mapStateToProps
)(WeatherList)