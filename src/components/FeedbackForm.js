import { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisable, setBtnDisable] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisable(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisable(true);
    } else {
      setMessage(null);
      setBtnDisable(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      handleAdd(newFeedback);
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you like to rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <input
          className="input-group"
          type="text"
          placeholder="Write a review"
          onChange={handleTextChange}
          value={text}
        />
        <Button type="submit" isDisabled={btnDisable}>
          Send
        </Button>
      </form>
    </Card>
  );
};

export default FeedbackForm;
