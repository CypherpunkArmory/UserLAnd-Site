import React, { Component } from 'react';
import { connect } from 'react-redux';
import './jobs.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import ScrollAnimation from 'react-animate-on-scroll';

configureAnchors({  offset: -60, scrollDuration: 500  });

class Jobs extends Component {

  
  render() { 
    return (
      <section className="main-container">
        

        {/* --- Landing Section --- */}
        <div className="jlanding-container">
          <div className="maxwidth-wrap">
            <div className="jobs-layer">
              <h3 className="jlanding-title">The Possibilities Are Endless</h3>
              <div className="landing-img"></div>
            </div>
          </div>
        </div>


        {/* --- Job Posting Section --- */}
        <ScrollableAnchor id={'jobs'}>
          <div className="job-container">
            <div className="maxwidth-wrap">
          
              {/* Title goes here */}
              <h5 className="about-title"> Jobs at UserLAnd</h5>
              <div className="title-block"></div>
          
              {/* Text goes here */}
              <div className="job-section">
                <ul className="jobs-ul">
                
                  <ScrollAnimation animateIn='fadeIn'>
                    <li className="jobs-li">
                      <div className="jobs-title">
                        <h4>Back-End Developer</h4>
                        <p>Application Deadline: 6/30/2018</p>
                    
                      </div>
                      <div className="jobs-description">
                        <p>A back-end web developer is responsible for server-side web application logic and integration of the work front-end developers do. Back-end developers are usually write the web services and APIs used by front-end developers and mobile application developers.</p>
                        <ul className="jobs-sub-ul">
                          <li>You are smart and keep your head up in the face of a challenge.</li>
                          <li>You are a quick study and enjoy learning new things.</li>
                          <li>You have a demonstrated aptitude for software development.</li>
                          <li>You are not afraid to dive into complex codebases teeming with both the new and shiny as well as the ancient and mysterious.</li>
                          <li>You diagnose and squash technical debt with glee.</li>
                          <li>You like helping others, regardless of their technical prowess.</li>
                        </ul>
                        <p>To apply, email your resume and cover letter to <strong><a href="mailto:jobs@userlandtech.com">jobs@userlandtech.com</a></strong></p>
                      </div>
                    </li>
                  </ScrollAnimation>

                  <ScrollAnimation animateIn='fadeIn'>
                    <li className="jobs-li">
                      <div className="jobs-title">
                        <h4>Back-End Developer</h4>
                        <p>Application Deadline: 6/30/2018</p>

                      </div>
                      <div className="jobs-description">
                        <p>A back-end web developer is responsible for server-side web application logic and integration of the work front-end developers do. Back-end developers are usually write the web services and APIs used by front-end developers and mobile application developers.</p>
                        <ul className="jobs-sub-ul">
                          <li>You are smart and keep your head up in the face of a challenge.</li>
                          <li>You are a quick study and enjoy learning new things.</li>
                          <li>You have a demonstrated aptitude for software development.</li>
                          <li>You are not afraid to dive into complex codebases teeming with both the new and shiny as well as the ancient and mysterious.</li>
                          <li>You diagnose and squash technical debt with glee.</li>
                          <li>You like helping others, regardless of their technical prowess.</li>
                        </ul>
                        <p>To apply, email your resume and cover letter to <strong><a href="mailto:jobs@userlandtech.com">jobs@userlandtech.com</a></strong></p>
                      </div>
                    </li>
                  </ScrollAnimation>
                
                </ul>
              </div>
            </div>
          </div>
        </ScrollableAnchor>


        
      </section>
    );
  }
}

export default connect(
  null,
  null
)(Jobs);