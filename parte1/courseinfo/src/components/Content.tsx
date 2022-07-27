import React, { useContext } from "react";
import { ExercisesContext } from "../Context/ExercisesContext";
import { Part } from "./Part";

export const Content = ():React.ReactElement => {
  const exercises = useContext(ExercisesContext)

  const part1:string = "Fundamentals of React";
  const part2:string = "Using props to pass data";
  const part3:string = "State of a component";

  return (
    <div className="col-12 col-md-10">
      <Part part={part1} exValue={exercises.ex1}/>
      <Part part={part2} exValue={exercises.ex2}/>
      <Part part={part3} exValue={exercises.ex3}/>
    </div>
  );
};
