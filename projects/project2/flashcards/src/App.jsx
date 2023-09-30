// src/App.js
import React, { useState } from 'react';
import './App.css';
import Flashcard from '../components/Flashcard';

const App = () => {
  const [flashcards, setFlashcards] = useState([
    { id: 1, question: 'What is the capital of France?', answer: 'Paris!' },
    { id: 2, question: 'In what continent is Nepal?', answer: 'Asia!' },
    { id: 3, question: 'What is the largest country on earth?', answer: 'Russia!' },
    { id: 4, question: 'What is the currency of Egypt?', answer: 'Egyptian Pound!' },
    { id: 5, question: 'What are the colors of the American Flag?', answer: 'Red white and Blue!' },
  ]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  let previousRandomIndex = -1;

  const handleNextCard = () => {
    let randomIndex;
  
    do {
      randomIndex = Math.floor(Math.random() * flashcards.length);
    } while (randomIndex === previousRandomIndex);

    previousRandomIndex = randomIndex;
    setCurrentCardIndex(randomIndex);
  };

  return (
    <div className="App">
      <h1>General Knowledge Test!</h1>
      <h2>Test your general Knowledge about the world here!</h2>
      <h3>Num of Cards: 5</h3>
      <br></br>
      <Flashcard
        question={flashcards[currentCardIndex].question}
        answer={flashcards[currentCardIndex].answer}
      />
      <br></br>
      <button onClick={handleNextCard}>Next</button>
    </div>
  );
};

export default App;
