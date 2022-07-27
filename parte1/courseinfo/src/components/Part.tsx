import React from 'react'

interface IPropPart {
  name:string
  exercise:number
}

export const Part = ({name,exercise}:IPropPart) => {
  return (
    <p className="fs-3">
    {name} <span className="fs-1 fw-bold text-primary">{exercise}</span>
  </p>
  )
}
