import React from 'react'

interface IPropPart {
  part:string
  exValue:number
}

export const Part = ({part,exValue}:IPropPart) => {
  return (
    <p className="fs-3">
    {part} <span className="fs-1 fw-bold text-primary">{exValue}</span>
  </p>
  )
}
