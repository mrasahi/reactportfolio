import React, { useState, useEffect } from 'react'
import Header from './components/Jumbotron'
import NavBar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { Navbar } from 'reactstrap'

const App = () => {
  return(
    <>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>

      <Header />
    </>
  )
}

export default App
