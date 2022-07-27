import React, { useContext } from "react";
import { ExercisesContext } from "../Context/ExercisesContext";

export const Content = ():React.ReactElement => {
  const exercises = useContext(ExercisesContext)

  const part1:string = "Fundamentals of React";
  const part2:string = "Using props to pass data";
  const part3:string = "State of a component";

  return (
    <div className="col-12 col-md-10">
      <p className="fs-3">
        {part1} <span className="fs-1 fw-bold text-primary">{exercises.ex1}</span>
      </p>
      <p className="fs-3">
        {part2} <span className="fs-1 fw-bold text-primary">{exercises.ex2}</span>
      </p>
      <p className="fs-3">
        {part3} <span className="fs-1 fw-bold text-primary">{exercises.ex3}</span>
      </p>
    </div>
  );
};
