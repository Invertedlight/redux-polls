import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Leaderboard from './Leaderboard'
import AddPoll from './AddPoll'
import Poll from './Poll'

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
    console.log("App RENDER PROPS: ", this.props)
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true 
          ? null 
          : <Poll match={{params: {id: 'loxhs1bqm25b708cmbf3g'}}}/>}
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
   return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App)
