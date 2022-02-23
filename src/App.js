import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

import FeedbackData from "./data/FeedbackData";
import AboutPage from "./components/AboutPage";
import AboutLink from "./components/AboutLink";
import { FeedbackProvider } from "./context/FeedbackContext";
import { Post } from "./components/Post";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  // Add rating
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList feedback={feedback} />
                </>
              }
            />

            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
