import React, { useState } from 'react';
import './AddQuizQuestion.css';

const AddQuizQuestion = () => {
  const [question, setQuestion] = useState({
    name: "",
    category: "",
    ch1: "",
    ch2: "",
    ch3: "",

  });
  const changeHandler = (e) => {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the question data to your backend or wherever it's needed
    console.log(question);

    try {
      const response = fetch('http://localhost:8000/api/v1/questions/addQuestion', {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify

      })

    } catch (err) {
      console.log(`Error happen ${err}`);
    }
    // Reset the form after submission
  };

  return (
    <div className="add-quiz-container">
      <h2>Add Quiz Question</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Question Name:</label>
          <input
            type="text"
            name='name'
            value={question.name}
            onChange={changeHandler}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            name='category'
            value={question.category}
            onChange={changeHandler}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Options:</label>
            <div className="option-group">
              <input
                type="text"
                name="ch1"
                value={question.ch1}
                onChange={changeHandler}
                className="form-control option-input"
              />
          
              <label className="correct-label">Option 1</label>
              <input
                type="text"
                name="ch2"
                value={question.ch2}
                onChange={changeHandler}
                className="form-control option-input"
              />
              <label className="correct-label">Option 2</label>
             
              <input
                type="text"
                name="ch3"
                value={question.ch3}
                onChange={changeHandler}
                className="form-control option-input"
              />
              <label className="correct-label">Option 3(Correct)</label>
            
            </div>
          
        </div>
        <button type="submit" className="btn-submit">Add Question</button>
      </form>
    </div>
  );
};

export default AddQuizQuestion;
