import React from 'react'
import './banner.module.scss'

export default function MaintenanceBanner({ message }) {
  return <div styleName="banner banner__maintenance">{message}</div>
}
