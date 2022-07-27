import { useContext } from "react"
import { feedbackContext } from "../Context/feedbackContext"
import { IPropsFeedbacks } from "../interfaces/IFeedbacks"

export const ItemStatistics = () => {
  const feedbacks = useContext<IPropsFeedbacks | null>(feedbackContext)
  return (
    <div className="fs-2 d-flex gap-5 justify-content-center">
      <p>good <span className="fw-bold">{feedbacks?.good}</span></p>
      <p>neutral <span className="fw-bold">{feedbacks?.neutral}</span></p>
      <p>bad <span className="fw-bold">{feedbacks?.bad}</span></p>
    </div>
  )
}
