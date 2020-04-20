import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Services from './pages/Services';
import SingleCocktail from './pages/SingleCocktail';
import Navbar from './components/Navbar';




const App = () => {
  return (
    <Router>
    <Navbar />
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="*">
            <Error />
        </Route>
      
      </Switch>
    </Router>
  )
}

export default App
