
import React, { useState } from 'react';
import '../src/Flashcard.css';

const Flashcard = ({ question, answer}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="card-front">
        <p>{question}</p>
      </div>
      <div className="card-back">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Flashcard;
