import React from 'react'
import { Content } from './components/Content'
import { Header } from './components/Header'
import { Total } from './components/Total'
import { ExercisesContext } from './Context/ExercisesContext'

interface IObjExercises {
  ex1: number
  ex2: number
  ex3: number
}

export const App = (): React.ReactElement => {
  const course: string = 'Half Stack application development'
  const exercises: IObjExercises = {
    ex1: 10,
    ex2: 7,
    ex3: 14
  }

  return (
    <div className="container text-center">
      <div className="row justify-content-center">
    <ExercisesContext.Provider value={exercises}>
      <Header course={course}/>
      <Content />
      <Total />
    </ExercisesContext.Provider>
      </div>
    </div>
  )

}