import React, { Component } from 'react';
import { connect } from 'react-redux';
import './home.css';
// import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
// import ProductImg from './product-sample.jpg';
import LandingImg from './UserLand-Logo-Only.png';
// import ScrollAnimation from 'react-animate-on-scroll';

import homeText from './HomeText';
import ReactMarkdown from 'react-markdown';

configureAnchors({  offset: -60, scrollDuration: 500  });

class Home extends Component {


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
          <div className="maxwidth-wrap">
            <ReactMarkdown source={homeText} />
          </div>
        </div>


        {/* --- Product Section --- */}
        {/*<ScrollableAnchor id={'product'}>
          <div className="product-container">
            <div className="maxwidth-wrap">

              <div className="product-wrap">

                <h4 className="product-title">Power for what you do today.
                <br/>And what you’ll discover tomorrow.</h4>
                <div className="title-block-product"></div>

                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>

              <ScrollAnimation animateIn='fadeIn'>
                <div className="product-flex">
                  <img className="product-img" src={ProductImg} alt="SampleImage"/>
                  <div className="product-description">
                    <h4>Technology As It Should Be</h4>
                    <p>Minimal design and a light color-scheme were strategic choices, and the browsing experience is based around visuals that stand out more powerfully because of these decisions, allowing users to view titles, media, news, and fun facts. The internet is a vast and ever-expanding source of information. But as it continues to grow, it will be ever more important to have trustworthy authorship</p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animateIn='fadeIn'>
                <div className="product-flex">
                  <img className="product-img" src={ProductImg} alt="SampleImage"/>
                  <div className="product-description">
                    <h4>Secure Access Wherever You Are</h4>
                    <p>Minimal design and a light color-scheme were strategic choices, and the browsing experience is based around visuals that stand out more powerfully because of these decisions, allowing users to view titles, media, news, and fun facts.</p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animateIn='fadeIn'>
                <div className="product-flex">
                  <img className="product-img" src={ProductImg} alt="SampleImage"/>
                  <div className="product-description">
                    <h4>Introducing the Worlds Most Secure Access</h4>
                    <p>Minimal design and a light color-scheme were strategic choices, and the browsing experience is based around visuals that stand out more powerfully because of these decisions, allowing users to view titles, media, news, and fun facts.</p>
                    <p>The internet is a vast and ever-expanding source of information. But as it continues to grow, it will be ever more important to have trustworthy authorship.</p>
                  </div>
                </div>
              </ScrollAnimation>


            </div>
          </div>
        </ScrollableAnchor>*/}


      </section>
    );
  }
}

export default connect(
  null,
  null
)(Home);