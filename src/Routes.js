import React, { Component } from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Home from './views/Home'
import Sales from './views/Sales'

class Routes extends Component {
  
  render() {
    
    return (
      <div className="container">
        <HashRouter>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/home' component={ Home } />
          <Route exact path='/sales' component={ Sales } />
        </Switch>
        </HashRouter>
        {/* <Home /> */}
      </div>
    )
  }
}

export default Routes
