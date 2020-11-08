import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Home from './Components/Pages'
import Services from './Components/Services'
import SingninPage from './Components/Pages/Singnin'

const App = () => {
    return (
        <Router>
          <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/signIn' exact component={SingninPage}/>
          </Switch>
        </Router>
    )
}

export default App
