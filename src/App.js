import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { parse } from 'url';
import { homepage } from '../package.json';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faTwitter, faSlack } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

import Home from './views/pages/home';
import Jobs from './views/pages/jobs';
import DefaultPage from './views/pages/DefaultPage';
import eulaText from './views/pages/DefaultPage/eulaText';
import NotFound from './views/pages/NotFound';
import privacyText from './views/pages/DefaultPage/privacyText';
import Nav from './views/layouts/Nav';
import Footer from './views/layouts/Footer';

library.add(fab, faCheckSquare, faGithub, faTwitter, faSlack)

const basename = parse(homepage).pathname;

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Helmet
          titleTemplate='%s - Use Linux Anywhere'
        >
          {/* Title: General title (Max 60 characters)*/}
          <title>UserLAnd</title>
          {/* Canonical Meta:  is a way of telling search engines that a specific URL represents the master copy of a page. Using the canonical tag prevents problems caused by identical or "duplicate" content appearing on multiple URLs. */}
          <link rel='canonical' href='http://userland.tech/' />
          {/* Description Meta:  is an attribute that helps describe your page for SEO. (Max 275 characters) */}
          <meta name='description' content='Get the full power of Linux on your Android. The easiest way to run a Linux distribution or application on Android. Download Now!' />
          {/* Open Graph Meta:  The Open Graph protocol enables any web page to become a rich object in a social graph. For instance, this is used on Facebook. */}
          <meta property='og:title' content='UserLAnd - Use Linux Anywhere' />
          <meta property='og:type' content='website' />
          <meta property='og:image' content='https://res.cloudinary.com/dmv3djaoq/image/upload/v1540821843/UserLand_Logo_RGB_Yellow_ysuigp.jpg' />
        </Helmet>
        <Router basename={basename}>
          <div>
            <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/jobs' component={Jobs} />
              <Route exact path='/policy' component={() => <DefaultPage markdown={privacyText} />} />
              <Route exact path='/eula' component={() => <DefaultPage markdown={eulaText} />} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
