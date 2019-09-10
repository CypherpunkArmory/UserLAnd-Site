import React from 'react'

import './spinner.module.scss'

const PageSpinner = ({ isLoading, children }) => {
  return isLoading ? (
    <div styleName="page__wrapper" className="container">
      <div>
        <div styleName="rect rect__one" />
        <div styleName="rect rect__two" />
        <div styleName="rect rect__three" />
      </div>
    </div>
  ) : (
    children
  )
}

export default PageSpinner
