import { FaTimes, FaEdit } from "react-icons/fa";
import { useState, useContext } from "react";
import Card from "./Card";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  //const [rating, setRating] = useState(8);
  //const [text, setText] = useState("Test");
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="#B000B9" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="#B000B9" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
