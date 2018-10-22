import React from 'react';
import './index.css';
import btnApple from './btn-Apple.png';

export default function AppleStore() {
  return (
    <a className='btn-apple' role='button' href='https://www.apple.com/itunes/'><img className='img-fluid' src={btnApple} alt=''/></a>
  )
}
