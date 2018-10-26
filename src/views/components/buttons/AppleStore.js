import React from 'react';
import './index.css';
import btnApple from './btn-Apple.png';

export default function AppleStore() {
  return (
    <span className='btn-apple' role='presentation' aria-label='apple store coming soon'><img className='img-fluid' src={btnApple} alt='App Store' /></span>
  )
}
