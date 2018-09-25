import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className='navbar-fixed'>
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo"><img height='60' width='150' alt='alyssa rae yoga logo' src={require('../pics/first_copy.png')}/></Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/flows">Flows</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>

    );
  }
}

export default Header;
