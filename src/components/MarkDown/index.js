import React from 'react'

import './MarkDown.scss'

export default function MarkDown({ dangerouslySetInnerHTML }) {
  return (
    <div
      className="markdown-body"
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    />
  )
}
