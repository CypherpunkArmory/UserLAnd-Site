import React from 'react'
import './index.css';
import btnGoogle from './btn-Google.png';

export default function GooglePlay() {
  const googlePlayUrl = 'https://play.google.com/store/apps/details?id=tech.ula';
  return (
    <a role='button' className='btn-google' aria-label='google play download' title='Download UserLAnd' href={googlePlayUrl}><img className='img-fluid' src={btnGoogle} alt='Google Play' /></a>
  )
}
