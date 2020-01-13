import React, { Component } from 'react'
import './index.css'
import Home from './views/Home'

class App extends Component {
  
  

  render() {
    
    return (
      <div className="container">
        
        <Home />
        {/* <Home todayData={this.state.todayData} /> */}
        {/* <Home parentCallback = {this.callbackFunction} finalData={finalData} /> */}
      </div>
    )
  }
}

export default App
