import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import WeatherList from '../../containers/WeatherList';
// import { filterTypes } from '../../actions';

/**
 * Tabs component
 */
class Tabs extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">All</Link>
            </li>
            <li>
              <Link to="/active">Active</Link>
            </li>
            <li>
              <Link to="/deleted">Deleted</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              ALL
              <WeatherList/>
            </Route>
            <Route path="/active">
              ACTIVE
              <WeatherList filter="ACTIVE"/>
            </Route>
            <Route path="/deleted">
              DELETED
              <WeatherList filter="DELETED"/>
            </Route>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default Tabs;