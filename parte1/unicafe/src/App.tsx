import { useState } from "react";
import { Feedback } from "./components/Feedback";
import { Statistics } from "./components/Statistics";
import { feedbackContext } from "./Context/feedbackContext";

export const App = () => {
  const [good, setGood] = useState<number>(0);
  const [neutral, setNeutral] = useState<number>(0);
  const [bad, setBad] = useState<number>(0);

  const objFeedbacks = {
    good,
    neutral,
    bad,
    setGood,
    setNeutral,
    setBad,
  };

  return (
    <feedbackContext.Provider value={objFeedbacks}>
      <div className="container text-center">
        <div className="row justify-content-center">
          <Feedback />
          <Statistics />
        </div>
      </div>
    </feedbackContext.Provider>
  );
};
