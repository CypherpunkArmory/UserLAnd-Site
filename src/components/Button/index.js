import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './button.module.scss'

function Button(props) {
  let {
    children,
    icon,
    tag: Tag,
    className,
    danger,
    round,
    ...attributes
  } = props

  if (attributes.href && Tag === 'button') {
    Tag = 'a'
  }

  return (
    <Tag
      styleName={classNames('btn', {
        btn_round: round,
        btn_primary: !danger,
        btn_danger: danger,
      })}
      className={className}
      type={Tag === 'button' && attributes.onClick ? 'button' : undefined}
      {...attributes}
    >
      {children}
      {icon && <span styleName="icon" />}
    </Tag>
  )
}

Button.propTypes = {
  active: PropTypes.bool,
  'aria-label': PropTypes.string,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  danger: PropTypes.bool,
  round: PropTypes.bool,
}

Button.defaultProps = {
  tag: 'button',
  danger: false,
  round: false,
}

export default Button
