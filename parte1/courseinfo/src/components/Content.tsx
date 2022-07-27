import React from "react";
import { IObjCourse } from "../interfaces/ICourse";
import { Part } from "./Part";


export const Content = ({ parts }: IObjCourse): React.ReactElement => {
  return (
    <div className="col-12 col-md-10">
      {
        parts.map((part, index) => {
          return <Part key={index} name={part.name} exercise={part.exercises} />
        })
      }

    </div>
  );
};
