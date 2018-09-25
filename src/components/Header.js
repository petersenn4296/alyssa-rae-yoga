import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import About from './About'
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className='navbar-fixed'>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo"><img height='60' width='150' src={require('../pics/first_copy.png')}/></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/flows">Flows</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <Route path="/about" component={About}/>
      </div>

    );
  }
}

export default Header;
