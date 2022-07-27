import React, { useContext } from "react";
import { ExercisesContext } from "../Context/ExercisesContext";
export const Total = () => {
  const exercises = useContext(ExercisesContext)
  return (
    <div className="col-12 col-md-10">
      <p className="fs-3">Number of exercises <span className="fs-1 fw-bold text-info">{exercises.ex1 + exercises.ex2 + exercises.ex3}</span></p>
    </div>
  )
}
