import React from 'react'
import './index.css';
import btnFDroid from './btn-FDroid.png';

export default function FDroid() {
  const fdroidUrl = 'https://f-droid.org/packages/tech.ula/';
  return (
    <a role='button' className='btn-fdroid' aria-label='fdroid download' title='Download UserLAnd' href={fdroidUrl}><img className='img-fluid' src={btnFDroid} alt='FDroid' /></a>
  )
}
