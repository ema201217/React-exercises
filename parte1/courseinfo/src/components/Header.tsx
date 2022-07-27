import React from 'react'

interface IPropsHeader {
  course: string
}

export const Header = ({ course }: IPropsHeader): React.ReactElement => {
  return (
    <h1 className="col-12 col-md-10 my-5 text-danger fw-bold text-decoration-underline">{course}</h1>
  )
}
