import React from 'react'

import './Logo.scss'

import logo from './LogoSVG.svg'

export default function Logo({ siteTitle, className }) {
  return (
    <>
      <img className={`logo ${className}`} src={logo} alt={siteTitle} />
    </>
  )
}
