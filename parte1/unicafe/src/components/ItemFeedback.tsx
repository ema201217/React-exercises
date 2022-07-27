import React, { useContext } from "react"
import { feedbackContext } from "../Context/feedbackContext"
import { IPropsFeedbacks } from "../interfaces/IFeedbacks"

export const ItemFeedback = (): React.ReactElement => {
  const feedbacks = useContext<IPropsFeedbacks | null>(feedbackContext)
  return (
    <div className="btn-group">
      <button className="btn btn-outline-success" onClick={() => feedbacks?.setGood(feedbacks?.good + 1)}>good</button>
      <button className="btn btn-outline-info" onClick={() => feedbacks?.setNeutral(feedbacks?.neutral + 1)}>neutral</button>
      <button className="btn btn-outline-danger" onClick={() => feedbacks?.setBad(feedbacks?.bad + 1)}>bad</button>
    </div>
  )
}
