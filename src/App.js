import "./App.css";
import Data from "./components/Data";
import { useState } from "react";
function App() {
  const [review2, setReview2] = useState(Data);
  const [reviewIndex, setReviewIndex] = useState(0);

  function handlePrevious(id) {
    setReviewIndex((id) => id - 1);
  }

  function handleNext(id) {
    setReviewIndex((id) => id + 1);
  }

  function handleSurprise(id) {
    let randomNumber = Math.floor(Math.random() * review2.length);

    if (randomNumber === id) {
      randomNumber = id + 1;
    }
    console.log(randomNumber);
    setReviewIndex(randomNumber);
  }

  return (
    <div className="App">
      <h1>Our Reviews</h1>
      <p>Total number of reviews: {review2.length}</p>
      <hr />
      <br />
      <div>
        <img src={review2[reviewIndex].image} alt={review2[reviewIndex].name} />
        <h2>{review2[reviewIndex].name}</h2>
        <p>Reviewer id: {review2[reviewIndex].id - 1}</p>
        <h3 style={{ color: "blue" }}>{review2[reviewIndex].job}</h3>
        <p>{review2[reviewIndex].text}</p>
      </div>
      <div>
        <button
          disabled={reviewIndex === 0}
          onClick={() => handlePrevious(reviewIndex)}
        >
          previous
        </button>
        <button
          disabled={reviewIndex === review2.length - 1}
          onClick={() => handleNext(reviewIndex)}
        >
          next
        </button>
      </div>
      <br />
      <button onClick={() => handleSurprise(reviewIndex)}>Surprise Me</button>
    </div>
  );
}

export default App;
