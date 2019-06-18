import React from 'react'

import './Logo.scss'

import logo from './LogoSVG.svg'

export default function Logo({ siteTitle }) {
  return (
    <>
      <img className="logo" src={logo} alt={siteTitle} />
    </>
  )
}
