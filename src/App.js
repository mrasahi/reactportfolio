import React from 'react'
import NavBar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'


const App = () => {
  return (
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



      <Footer />
    </>
  )
}

export default App
