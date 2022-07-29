import { useContext } from "react";
import { feedbackContext } from "../Context/feedbackContext";
import { IPropsFeedbacks } from "../interfaces/IFeedbacks";

const positives = (val: number, val2: number, val3: number): number => {
  let acum = 0;
  if (val > 0 || val2 > 0 || val3 > 0) {
    acum += val;
    acum += val2;
    acum += val3;
  }
  return acum;
};

export const ItemStatistics = () => {
  const feedbacks = useContext<IPropsFeedbacks | null>(feedbackContext);
  return (
    <div className="fs-2 d-flex gap-5 justify-content-center">
      <p>
        Good <span className="fw-bold">{feedbacks?.good}</span>
      </p>
      <p>
        Neutral <span className="fw-bold">{feedbacks?.neutral}</span>
      </p>
      <p>
        Bad <span className="fw-bold">{feedbacks?.bad}</span>
      </p>
      <p>
        All{" "}
        <span className="fw-bold">
          {feedbacks
            ? feedbacks?.good + feedbacks?.neutral + feedbacks?.bad
            : ""}
        </span>
      </p>
      <p>
        Average{" "}
        <span className="fw-bold">
          {feedbacks
            ? (feedbacks?.good + feedbacks?.neutral + feedbacks?.bad) / 3
            : ""}
        </span>
      </p>
      <p>
        Positive{" "}
        <span className="fw-bold">
          {feedbacks
            ? positives(feedbacks?.good, feedbacks?.neutral, feedbacks?.bad)
            : ""}
        </span>
      </p>
    </div>
  );
};
