import React, { Component } from 'react';
import { connect } from 'react-redux';
import './about.css';
// import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import ScrollAnimation from 'react-animate-on-scroll';
import AboutImg from './about.jpg';
import { Link } from 'react-router-dom';
import CoreImg from './shield.png';

configureAnchors({  offset: -60, scrollDuration: 500  });

class About extends Component {

  
  render() { 
    return (
      <section className="main-container">
        {/* <ScrollableAnchor id={'about'}> */}

        {/* --- Landing Section --- */}
        <div className="alanding-container">
          <div className="maxwidth-wrap">
            <div className="about-layer">
              <h3 className="landing-title">We’re a company founded on the belief that good ideas deserve to be made.</h3>
              <div className="landing-img"></div>
            </div>
          </div>
        </div>



        {/* --- About Us Section --- */}
        <div className="about-container">
          <div className="maxwidth-wrap">
          
            {/* Title goes here */}
            <h5 className="about-title"> About UserLAnd Technologies</h5>
            <div className="title-block"></div>
          
            <div className="about-content">
              <ScrollAnimation animateIn='fadeIn'>
                <img className="about-img" src={AboutImg} alt="About UserLAnd"/>            
              </ScrollAnimation>
              
              {/* Text goes here */}
              <div className="about-text">
                <h4>We strive for better security and accessibility</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </div>


        {/* --- Our Core Values --- */}
        <div className="about-container">
          <div className="maxwidth-wrap">
          
            {/* Title goes here */}
            <h5 className="about-title"> Our Core Values</h5>
            <div className="title-block"></div>
          
            <div className="core-content">
              
              {/* Text goes here */}
              <ScrollAnimation animateIn='fadeIn' delay='100'>
                <img className="core-img" src={CoreImg} alt="Secure"/>
                <h4>Secure</h4>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </ScrollAnimation>

              {/* Text goes here */}
              <ScrollAnimation animateIn='fadeIn' delay='400'>
                <img className="core-img" src={CoreImg} alt="Secure"/>
                <h4>Safe</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </ScrollAnimation>

              {/* Text goes here */}
              <ScrollAnimation animateIn='fadeIn' delay='800'>
                <img className="core-img" src={CoreImg} alt="Secure"/>
                <h4>Accessible</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </ScrollAnimation>

            </div>
          </div>
        </div>

      
        {/* --- View our product section --- */}
        <div className="about-container">
          <div className="maxwidth-wrap">
          
            {/* Title goes here */}
            <h5 className="about-title"> Our Products</h5>
            <div className="title-block"></div>
          
            <div className="view-content">
              
              {/* Text goes here */}
              <h4>We make simple, complex and secure systems</h4>
              <p><Link to="/" href="#product" alt="Go to product page">Explore Our Products</Link></p>
        
            </div>
          </div>
        </div>




        {/* </ScrollableAnchor> */}
      </section>
    );
  }
}

export default connect(
  null,
  null
)(About);