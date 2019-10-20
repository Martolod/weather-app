import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import WeatherData from '../containers/WeatherData';

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
              <WeatherData/>
            </Route>
            <Route path="/active">
              ACTIVE
            </Route>
            <Route path="/deleted">
              DELETED
            </Route>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default Tabs;