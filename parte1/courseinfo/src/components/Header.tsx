import React from 'react'
import { IObjCourse } from '../interfaces/ICourse'

export const Header = ({name}: IObjCourse): React.ReactElement => {
  return (
    <h1 className="col-12 col-md-10 my-5 text-danger fw-bold text-decoration-underline">{name}</h1>
  )
}
