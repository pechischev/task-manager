import React, { FC, useCallback } from 'react'

type FieldProps = {
  type: string
  label?: string
  required?: boolean
  value?: string

  onChange: (event: Event, value: string) => void
}

function getFieldElementByType(type: string): JSX.Element {
  if (type === 'date') {
    return <input type="date" />
  } else if (type === 'textarea') {
    return <textarea />
  }
  return <input type="text" />
}

export const Field: FC<FieldProps> = ({ children, label, type, onChange: handleChange, ...rest }) => {
  const fieldElement = getFieldElementByType(type)

  const onChange = useCallback(
    (event) => {
      handleChange(event, event.target.value)
    },
    [handleChange],
  )

  return (
    <label className="field">
      {label && <span className="field__label">{label}</span>}
      {React.cloneElement(fieldElement, { className: 'field__input', onChange, ...rest })}
    </label>
  )
}
