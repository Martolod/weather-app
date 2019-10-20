import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';
import WeatherList from '../../containers/WeatherList';
import './Tabs.css';

/**
 * Tabs component
 */
class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: this.tabs[0].id
    }
  }

  tabs = [
    {
      id: 'all',
      link: '/all',
      name: 'All',
      filter: null
    },
    {
      id: 'active',
      link: '/active',
      name: 'Active',
      filter: 'ACTIVE'
    },
    {
      id: 'deleted',
      link: '/deleted',
      name: 'Deleted',
      filter: 'DELETED'
    }
  ]

  render() {
    return (
      <Router>
        <Redirect exact from="/" to={this.tabs[0].link} />

        <div className="weather-tabs__wrapper">
          <div className="weather-tabs__navbar">
          {
            this.tabs.map(tab => (
              <div key={tab.id} className={`weather-tabs__tab`} >
                <NavLink activeClassName="weather-tabs__tab_active" to={tab.link}>
                  <div className="weather-tab__link" onClick={() => this.setState({active: tab.id})}>
                    {tab.name}
                  </div>
                </NavLink>
              </div>
            ))
          }
          </div>

          <Switch>
            <Route exact path={this.tabs[0].link}>
              <WeatherList/>
            </Route>
            <Route path={this.tabs[1].link}>
              <WeatherList filter={this.tabs[1].filter}/>
            </Route>
            <Route path={this.tabs[2].link}>
              <WeatherList filter={this.tabs[2].filter}/>
            </Route>
        </Switch>

        </div>
      </Router>
    );
  }
}

export default Tabs;