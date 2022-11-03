import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FavoritesSongs from './components/FavoritesSongs'
import Navigation from './components/Navigation'
import Search from './components/Search'
import Home from './components/Home'
import './css/app.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'

export default function App(props) {



  return (
    <div>
     <Router>
        <Navigation />
        <Switch>
          <Route  exact path='/' >
            <Home github={props.github} />
            </Route>
          <Route path  ='/favoritesSongs'>
            <FavoritesSongs/>
            </Route>
          <Route path  ='/search' >
            <Search/>
            </Route>
        </Switch>
    </Router> 
    <Footer/>
    </div>
  )
}

