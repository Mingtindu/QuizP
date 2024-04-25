import React from 'react';
import './Programming.css'
const Programming = ({quizName}) => {
  const quizQuestions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      correctAnswer: 'Paris'
    },
    {
      question: 'Which programming language is used for building web pages?',
      options: ['Java', 'Python', 'JavaScript', 'C++'],
      correctAnswer: 'JavaScript'
    },
    // Add more questions as needed
  ];

  // State to store the user's selected answer for each question
  const [userAnswers, setUserAnswers] = React.useState(Array(quizQuestions.length).fill(null));

  // Function to handle selecting an answer
  const handleAnswerSelect = (questionIndex, selectedOption) => {
    setUserAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = selectedOption;
      return newAnswers;
    });
  };

  // Function to calculate the score
  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((question, index) => {
      if (question.correctAnswer === userAnswers[index]) {
        score++;
      }
    });
    return score;
  };

  return (
    <div>
      <h1>{quizName}</h1>
      <h2>Quiz Questions</h2>
      {quizQuestions.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
          <ul>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <label>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={userAnswers[index] === option}
                    onChange={() => handleAnswerSelect(index, option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={() => alert(`Your score is ${calculateScore()}/${quizQuestions.length}`)}>
        Submit
      </button>
    </div>
  );
};

export default Programming;
