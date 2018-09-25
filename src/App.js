import React, { Component } from 'react';
import Header from './components/Header'
import { Parallax } from 'react-materialize'
import { Route, BrowserRouter as Router, } from 'react-router-dom'
import About from './components/About'
import Flows from './components/Flows'
import Contact from './components/Contact'


class App extends Component {
render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={() =>
              <div>
                <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
                <div className="section white">
                  <div className="row container">
                    <h2 className="header">Parallax</h2>
                    <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                  </div>
                </div>
                <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg"/>
              </div>}/>
              <Route path="/about" component={About}/>
              <Route path="/Flows" component={Flows}/>
              <Route path="/Contact" component={Contact}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
