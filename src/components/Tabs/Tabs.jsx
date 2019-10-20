import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import WeatherList from '../../containers/WeatherList';
import './Weather.css';

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
      link: '/',
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
        <div className="weather-tabs__wrapper">
          <div className="weather-tabs__navbar">
          {
            this.tabs.map(tab => (
              <div 
                key={tab.id} 
                className={`weather-tabs__tab ${tab.id === this.state.active ? 'weather-tabs__tab_active' : ''}`} 
                onClick={() => this.setState({active: tab.id})}
              >
                <Link to={tab.link}>{tab.name}</Link>
              </div>
            ))
          }
          </div>

          <Switch>
            <Route exact path="/">
              <WeatherList/>
            </Route>
            <Route path={this.tabs[1].link}>
              <WeatherList filter="ACTIVE"/>
            </Route>
            <Route path={this.tabs[2].link}>
              <WeatherList filter="DELETED"/>
            </Route>
        </Switch>

        </div>
      </Router>
    );
  }
}

export default Tabs;