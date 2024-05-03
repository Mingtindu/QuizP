import React from 'react';
import { Link } from 'react-router-dom';
import './QuizSelectionPage.css';
import programming_img from '../../Images/programming.png';
import gk_img from '../../Images/gk.jpg';
import geography_img from '../../Images/geography.jpg';
import animal_img from '../../Images/animal.jpg';

const QuizSelectionPage = () => {
  return (
    <div className="quiz-selection">
      <h1>Play Now</h1>
      <div className="quiz-options">
        <Link to="/play/Programming-quiz"> 
          <div className="quiz-option">
            <img src={programming_img} alt="Programming Quiz" />
            <h2>Programming Quiz</h2>
          </div>
        </Link>
        <Link to="/gk/General Knowledge Quiz"> 
          <div className="quiz-option">
            <img src={gk_img} alt="General Knowledge Quiz" />
            <h2>General Knowledge Quiz</h2>
          </div>
        </Link>
        <Link to="/geography/Geography Quiz">
          <div className="quiz-option">
            <img src={geography_img} alt="Geography Quiz" />
            <h2>Geography Quiz</h2>
          </div>
        </Link>
        <Link to="/animal/Animal Quiz">
          <div className="quiz-option">
            <img src={animal_img} alt="Animal Quiz" />
            <h2>Animal Quiz</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default QuizSelectionPage;
