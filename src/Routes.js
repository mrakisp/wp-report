import React, { Component } from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Home from './views/Home'

class Routes extends Component {
  
  render() {
    
    return (
      <div className="container">
        <HashRouter>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/home' component={ Home } />
        </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default Routes
