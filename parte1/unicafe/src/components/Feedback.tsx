import { ItemFeedback } from "./ItemFeedback";

export const Feedback = () => {
  return (
    <div className="col-12 col-md-8 border border-1 p-3">
      <h2 className="text-primary text-decoration-underline mb-4">
        Give feedback
      </h2>
      <ItemFeedback />
    </div>
  );
};
