import React from 'react'
import { Content } from './components/Content'
import { Header } from './components/Header'
import { Total } from './components/Total'
import { IObjCourse } from './interfaces/ICourse'


export const App = (): React.ReactElement => {
  const course: IObjCourse = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      }, {
        name: 'Using props to pass data',
        exercises: 7
      }
      , {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div className="container text-center">
      <div className="row justify-content-center">
          <Header {...course} />
          <Content {...course}/>
          <Total {...course}/>
      </div>
    </div>
  )

}