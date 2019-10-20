import { connect } from 'react-redux';
import Form from '../components/Form/Form';
import { add } from '../actions';

const mapDispatchToProps = dispatch => ({
  addWeatherData: cityName => dispatch(add(cityName))
});

export default connect(
  null,
  mapDispatchToProps
)(Form)