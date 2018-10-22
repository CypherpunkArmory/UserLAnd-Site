import React, { Component } from 'react';
import phoneScr from './phone.png'
import GooglePlay from '../../components/buttons/GooglePlay';
import phoneScrFeature from './galaxys8-feature.png'
import phoneScrFeatureHorizontal from './phone-feature-horizontal.png'
import AppleStore from '../../components/buttons/AppleStore';
import './index.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <div className='hero'>
          <div className='container'>
            <div className='hero__body'>
              <h1 className='hero__title'>Use Linux Everywhere</h1>
              <p>
                Get the full power of Linux on your Android. <br />
                The easiest way to run a Linux distribution or application on Android.
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
                  <h3 className='feature__title'>Condimentum vitae</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut. Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Metus dictum at tempor commodo ullamcorper a lacus.
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Pellentesque habitant morbi tristique senectus et netus et. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus.
                  </p>
              </div>
              <div className='feature__media'>
                <img className='img-fluid' src={phoneScrFeature} alt='Samsung Galaxy S8 UserLAnd' />
              </div>
            </div>
            <div className='feature feature_horizontal'>
              <div className='feature__head'>
                <h3 className='feature__title'>Condimentum vitae</h3>
              </div>
              <div className='feature__media'>
                <img className='img-fluid' src={phoneScrFeatureHorizontal} alt='Samsung Galaxy S8 UserLAnd' />
              </div>
              <div className='feature__body'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut. Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Metus dictum at tempor commodo ullamcorper a lacus.
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Pellentesque habitant morbi tristique senectus et netus et. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus.
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