import React from 'react'
import classnames from 'classnames'

import './spinner.module.scss'

export default ({ isWhite }) => {
  return (
    <div styleName="wrapper">
      <div styleName={classnames('cssload-loader', {'white':isWhite})} />
    </div>
  )
}
