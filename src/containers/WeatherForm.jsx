import { connect } from 'react-redux';
import Form from '../components/Form/Form';
import { addAction } from '../actions';

const mapDispatchToProps = dispatch => ({
  addWeatherData: cityName => dispatch(addAction(cityName))
});

export default connect(
  null,
  mapDispatchToProps
)(Form)