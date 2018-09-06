import React from 'react';
import './eula.css';
import eulaText from './eulaText.js';
import ReactMarkdown from 'react-markdown';
import LandingImg from './UserLand-Logo-Only.png';

class Eula extends React.Component {

  render() {
    return (
      <section className="main-container">


        {/* --- Landing Section --- */}
        <div className="landing-container">
          <div className="maxwidth-wrap">
            <div className="product-layer">
              {/* <h1 className="landing-title">The Possibilities Are Endless</h1> */}
              <div className="landing-img"><img src={LandingImg} alt="Userland logo"/></div>
              <div className="pulse-wrap">
                <a href="#product" className="pulse-link" alt="Go to main section"><button className="pulse-button"></button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="product-container">
          <ReactMarkdown source={eulaText} />
        </div>
      </section>
    );
  }
}

export default Eula;