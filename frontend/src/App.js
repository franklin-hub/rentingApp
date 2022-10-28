import React from "react";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'
import Listings from './containers/Listings'
import ListingDetail from './containers/ListingDetail'
import LogIn from './containers/LogIn'
import SignUp from './containers/SignUp'
import NotFound from './components/NotFound'

import './sass/main.scss'

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/About" element={<About/>} />
      <Route exact path="/Contact" element={<Contact/>} />
      <Route exact path="/Listings" element={<Listings/>} />
      <Route exact path="/Listings/:id" element={<ListingDetail/>} />
      <Route exact path="/LogIn" element={<LogIn/>} />
      <Route exact path="/SignUp" element={<SignUp/>} />
      <Route  path="**" element={<NotFound/>} />
    </Routes>
  </Router>
)

export default App;
