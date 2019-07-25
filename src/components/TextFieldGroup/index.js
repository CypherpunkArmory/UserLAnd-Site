import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

import './TextFieldGroup.module.scss'

function TextFieldGroup({
  field,
  type,
  label,
  placeholder,
  id,
  error,
  onChange,
  className,
}) {
  return (
    <FormGroup styleName="form">
      <Label for={id} hidden>
        {label}
      </Label>
      <Input
        type={type}
        name={field}
        onChange={onChange}
        id={id}
        placeholder={placeholder}
        invalid={!!error}
        className={className}
      />
      {error && <FormFeedback tooltip><FontAwesomeIcon icon={faExclamationTriangle} />{error}</FormFeedback>}
    </FormGroup>
  )
}

TextFieldGroup.prototype = {
  field: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string,
  error: PropTypes.object,
  onChange: PropTypes.func.isRequired,
}

export default TextFieldGroup
