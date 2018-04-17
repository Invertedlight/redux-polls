import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Leaderboard from './Leaderboard'
import AddPoll from './AddPoll'
import Poll from './Poll'
import Nav from './Nav'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../css/index.css';
// import Nav from './Nav'
// import Leaderboard from './Leaderboard'
// import AddPoll from './AddPoll'
// import Home from './Home'
import Dashboard from './Dashboard'


class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
    
    }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Nav />
          {this.props.loading === true 
            ? null 
            : <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/Leaderboard' component={Leaderboard} />
                <Route path='polls/:id' component={Poll} />
                <Route path='/add' component={AddPoll} />
              </div>
            }
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
   return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App)
