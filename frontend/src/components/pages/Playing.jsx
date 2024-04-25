import React, { useState } from 'react';
import './Play.css'
const Playing = () => {
  const [questions, setQuestions] = useState([
    {
      category: 'DSA',
      question: 'What is the time complexity of binary search?',
      options: ['O(log n)', 'O(n)', 'O(n^2)', 'O(1)'],
      correctAnswer: 'O(log n)'
    },
    {
      category: 'DBMS',
      question: 'Which of the following is not a type of database model?',
      options: ['Relational', 'NoSQL', 'Hierarchical', 'Linear'],
      correctAnswer: 'Linear'
    },
    {
      category: 'JavaScript',
      question: 'What does DOM stand for?',
      options: [
        'Document Object Model',
        'Data Object Model',
        'Distributed Object Model',
        'Document Oriented Model'
      ],
      correctAnswer: 'Document Object Model'
    },
    {
      category: 'Java',
      question: 'What is the parent class of all classes in Java?',
      options: ['Object', 'Main', 'Super', 'Parent'],
      correctAnswer: 'Object'
    }
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    // Check if the selected option is correct
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption('');
  };

  return (
    <div className="play-quiz">
      {currentQuestionIndex < questions.length ? (
        <div className="question-container">
          <h3>Category: {questions[currentQuestionIndex].category}</h3>
          <h4>Question {currentQuestionIndex + 1}</h4>
          <p>{questions[currentQuestionIndex].question}</p>
          <div className="options-container">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div key={index} className="option">
                <input
                  type="radio"
                  id={`option${index}`}
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                />
                <label htmlFor={`option${index}`}>{option}</label>
              </div>
            ))}
          </div>
          <button onClick={handleNextQuestion} disabled={!selectedOption}>
            Next
          </button>
        </div>
      ) : (
        <div className="quiz-results">
          <h2>Quiz Completed!</h2>
          <p>Your score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default Playing;
