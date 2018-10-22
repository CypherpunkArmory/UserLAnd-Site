import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faTwitter, faSlack } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

import Home from './views/pages/home';
import Jobs from './views/pages/jobs';
import DefaultPage from './views/pages/DefaultPage';
import eulaText from './views/pages/DefaultPage/eulaText';
import privacyText from './views/pages/DefaultPage/privacyText';
import Nav from './views/layouts/Nav';
import Footer from './views/layouts/Footer';

library.add(fab, faCheckSquare, faGithub, faTwitter, faSlack)

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/jobs' component={Jobs} />
              <Route exact path='/policy' component={() => <DefaultPage markdown={privacyText}/>} />
              <Route exact path='/eula' component={() => <DefaultPage markdown={eulaText}/>} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
