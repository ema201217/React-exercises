import React from "react";
import { IObjCourse } from "../interfaces/ICourse";


export const Total = ({ parts }: IObjCourse) => {
  const totalExercises = (): number => {
    let acum = 0;
    parts.map(({ exercises }) => acum += exercises)
    return acum
  }

  return (
    <div className="col-12 col-md-10">
      <p className="fs-3">Number of exercises <span className="fs-1 fw-bold text-info">
        {totalExercises()}</span></p>
    </div>
  )
}
