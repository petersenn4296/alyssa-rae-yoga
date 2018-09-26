import React, { Component } from 'react';
// import { Row, Col, NavItem, Navbar, Icon } from 'react-materialize'
import '../App.css';
import mom from '../pics/work.gif'

class Flows extends Component {
  render() {
    return (
      <div className='container'>

        {/* earth flow */}
        <div className="col s12 m7">
          <h3 className="header">Earth Flow</h3>
          <div className="card horizontal">
            <div className="card-image">
              <img src={mom}/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>I am a piggy butt.</p>
              </div>
              {/* <div className="card-action">
                <a href="#">This is a link</a>
              </div> */}
            </div>
          </div>
        </div>

        {/* wind flow */}
        <div className="col s12 m7">
          <h3 className="header">Wind Flow</h3>
          <div className="card horizontal">
            <div className="card-stacked">
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
            <div className="card-image">
              <img src={mom}/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Flows;
