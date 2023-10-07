// src/App.js
import React, { useState } from 'react';
import './App.css';
import Flashcard from '../components/Flashcard';

const App = () => {
  const [flashcards, setFlashcards] = useState([
    { id: 1, question: 'What is the capital of France?', answer: 'Paris' },
    { id: 2, question: 'In what continent is Nepal?', answer: 'Asia' },
    { id: 3, question: 'What is the largest country on earth?', answer: 'Russia' },
    { id: 4, question: 'What is the currency of Egypt?', answer: 'Egyptian Pound' },
    { id: 5, question: 'What are the colors of the American Flag?', answer: 'Red white and Blue' },
  ]);
  
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const shuffleFlashcards = () => {
    const shuffledFlashcards = [...flashcards];
    for (let i = shuffledFlashcards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledFlashcards[i], shuffledFlashcards[j]] = [shuffledFlashcards[j], shuffledFlashcards[i]];
    }
    setFlashcards(shuffledFlashcards);
  };

  const handleNextClick = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === flashcards.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePrevClick = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length -1 : prevIndex - 1
    );
  };

  const handleButtonClick = () => {
    const userInput = document.getElementById("TextInput").value;
    const currentFlashcardAnswer = flashcards[currentCardIndex].answer;
    if (userInput === currentFlashcardAnswer) {
      document.getElementById("TextInput").style.borderColor = "green";
    } else {
      document.getElementById("TextInput").style.borderColor = "red";
    }
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
      <input type='text' id='TextInput' placeholder='Type your answer: '></input>
      <button onClick={handleButtonClick}>Submit</button>
      <br></br>
      <br></br>

      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
      <button onClick={shuffleFlashcards}>Shuffle</button>
      
    </div>
  );
};

export default App;
