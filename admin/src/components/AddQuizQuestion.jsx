import React, { useState } from 'react';
import './AddQuizQuestion.css';

const AddQuizQuestion = () => {
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('');
  const [options, setOptions] = useState(['', '', '']);
  const [correctOptionIndex, setCorrectOptionIndex] = useState(0);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleCorrectOptionChange = (index) => {
    setCorrectOptionIndex(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the question data to your backend or wherever it's needed
    console.log({
      question,
      category,
      options,
      correctOption: options[correctOptionIndex]
    });
    // Reset the form after submission
    setQuestion('');
    setCategory('');
    setOptions(['', '', '']);
    setCorrectOptionIndex(0);
  };

  return (
    <div className="add-quiz-container">
      <h2>Add Quiz Question</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Question Name:</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Options:</label>
          {options.map((option, index) => (
            <div key={index} className="option-group">
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                className="form-control option-input"
              />
              <input
                type="radio"
                name="correctOption"
                checked={correctOptionIndex === index}
                onChange={() => handleCorrectOptionChange(index)}
                className="correct-option"
              />
              <label className="correct-label">Correct</label>
            </div>
          ))}
        </div>
        <button type="submit" className="btn-submit">Add Question</button>
      </form>
    </div>
  );
};

export default AddQuizQuestion;
