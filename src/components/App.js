import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../css/index.css';
import Nav from './Nav'
import Leaderboard from './Leaderboard'
import AddPoll from './AddPoll'
import Home from './Home'


class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/leaderboard' component={Leaderboard} />
            <Route path='/add-poll' component={AddPoll} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
