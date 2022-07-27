import React from 'react'

interface IObjExercises {
  ex1: number
  ex2: number
  ex3: number
}
const exercises: IObjExercises = {
  'ex1': 10,
  'ex2': 7,
  'ex3': 14
}
export const ExercisesContext = React.createContext(exercises)