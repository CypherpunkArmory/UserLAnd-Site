import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import './app.css';
import Loading from './errorloading/Loading';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from '../home/Home';
import About from '../about/About';
import Jobs from '../jobs/Jobs';
import Eula from '../eula/Eula';
import Privacy from '../privacy/Privacy';
import ScrollToTop from './ScrollToTop';


export default class App extends Component {

  render() {

    return (
      <div className="app">

        <Router>
          <div>
            <Header/>
            <main role="main" id="main">
              <Loading/>
              <Switch>
                <ScrollToTop exact path="/" component={Home}/>
                <ScrollToTop path="/about" component={About}/>
                <ScrollToTop path="/jobs" component={Jobs}/>
                <ScrollToTop path="/eula" component={Eula}/>
                <ScrollToTop path="/privacy" component={Privacy}/>
                <Redirect to="/"/>
              </Switch>
            </main>
          </div>
        </Router>

        <Footer/>
      </div>
    );
  }
}
