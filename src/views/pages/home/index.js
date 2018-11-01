import React, { Component } from 'react';
import phoneScr from './vertical-screenshot.png'
import GooglePlay from '../../components/buttons/GooglePlay';
import phoneScrFeature from './phone-feature.gif'
import phoneScrFeatureHorizontal from './phone-feature-horizontal.gif'
import AppleStore from '../../components/buttons/AppleStore';
import hometext from './hometext';
import './index.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <div className='hero'>
          <div className='container'>
            <div className='hero__body'>
              <h1 className='hero__title'>{hometext.hero.header}</h1>
              <p>
                {hometext.hero.body}
              </p>
              <div className='hero__cta'>
                <GooglePlay />
                <AppleStore />
              </div>
            </div>
            <div className='hero__media'>
              <img className='img-fluid' src={phoneScr} alt='Samsung Galaxy S8 UserLAnd' />
            </div>
          </div>
        </div>
        <div className='features'>
          <div className="container">
            <div className='feature feature_vertical'>
              <div className='feature__body'>
                <div className='feature__head'>
                  <h3 className='feature__title'>{hometext.features.vertical.header}</h3>
                </div>
                <p>
                  {hometext.features.vertical.body}
                </p>
              </div>
              <div className='feature__media'>
                <img className='img-fluid' src={phoneScrFeature} alt='Samsung Galaxy S8 UserLAnd' />
              </div>
            </div>
            <div className='feature feature_horizontal'>
              <div className='feature__head'>
                <h3 className='feature__title'>{hometext.features.horizontal.header}</h3>
              </div>
              <div className='feature__media'>
                <img className='img-fluid' src={phoneScrFeatureHorizontal} alt='Samsung Galaxy S8 UserLAnd' />
              </div>
              <div className='feature__body'>
                <p>
                  {hometext.features.horizontal.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
