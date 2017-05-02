import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Weather from './Weather'
import Location from './Conditions'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Your Local Weather!</Link></li>
        <li><Link to="/Conditions">Conditions</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Weather}/>
      <Route path="/Conditions" component={Location}/>
    </div>
  </Router>
)

export default App;
