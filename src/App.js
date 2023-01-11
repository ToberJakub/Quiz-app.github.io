import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of Poland?",
      options: [
        { id: 0, text: "Kraków", isCorrect: false },
        { id: 1, text: "Gdańsk", isCorrect: false },
        { id: 2, text: "Łódź", isCorrect: false },
        { id: 3, text: "Warszawa", isCorrect: true },
      ],
    },
    {
      text: "What year was the 3rd May Constitution witten?",
      options: [
        { id: 0, text: "1791", isCorrect: true },
        { id: 1, text: "1796", isCorrect: false },
        { id: 2, text: "1793", isCorrect: false },
        { id: 3, text: "1792", isCorrect: false },
      ],
    },
    {
      text: "Who wrote the Polish national anthem?",
      options: [
        { id: 0, text: "Józef Wybicki", isCorrect: true },
        { id: 1, text: "Henryk Dąbrowski", isCorrect: false },
        { id: 2, text: "Tadeusz Kościuszko", isCorrect: false },
        { id: 3, text: "Adam Mickiewicz", isCorrect: false },
      ],
    },
    {
      text: "What was the first historical ruler of Poland?",
      options: [
        { id: 0, text: "Bolesław Chrobry", isCorrect: false },
        { id: 1, text: "Mieszko I", isCorrect: true },
        { id: 2, text: "Siemomysł", isCorrect: false },
        { id: 3, text: "Lech", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border with Poland?",
      options: [
        { id: 0, text: "Russia", isCorrect: false },
        { id: 1, text: "Slovenia", isCorrect: true },
        { id: 2, text: "Germany", isCorrect: true },
        { id: 3, text: "Lithuania", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>Poland Quiz</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
