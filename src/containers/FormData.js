import { connect } from 'react-redux';
import Form from '../components/Form';
import { addAction } from '../actions';

// const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  addWeatherData: cityName => dispatch(addAction(cityName))
});

export default connect(
  null,
  mapDispatchToProps
)(Form)