// components/QuestionForm.js
import { useState } from 'react';
import styles from "./Questionform.css";

function QuestionForm() {
  const [questionType, setQuestionType] = useState('short-answer');
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    options: ['', '', '', ''],
    correctAnswer: ''
  });

  const handleReset = () => {
    setFormData({
      question: '',
      answer: '',
      options: ['', '', '', ''],
      correctAnswer: ''
    });
  };

  const handleSave = () => {
    // saveQuestionToBackend(formData);
  };

  const handleAdd = () => {
    setFormData({
      question: '',
      answer: '',
      options: ['', '', '', ''],
      correctAnswer: ''
    });
  };

  return (
    <div className="question-form">
      <div className="form-content">
        <div className="form-group">
          <label>Question:</label>
          <textarea
            placeholder="Text Area"
            value={formData.question}
            onChange={(e) => setFormData({ ...formData, question: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Question Type:</label>
          <div className="question-type-buttons">
            <button
              onClick={() => setQuestionType('short-answer')}
              style={{ backgroundColor: questionType === 'short-answer' ? 'lightgrey' : 'black', color: questionType === 'short-answer' ? 'black' : 'white' }}
            >
              Short Answer
            </button>
            <button
              onClick={() => setQuestionType('mcq')}
              style={{ backgroundColor: questionType === 'mcq' ? 'lightgrey' : 'black', color: questionType === 'mcq' ? 'black' : 'white' }}
            >
              MCQ
            </button>
            <button
              onClick={() => setQuestionType('true-false')}
              style={{ backgroundColor: questionType === 'true-false' ? 'lightgrey' : 'black', color: questionType === 'true-false' ? 'black' : 'white' }}
            >
              True / False
            </button>
          </div>
        </div>
        {questionType === 'short-answer' && (
          <div className="form-group">
            <label>Answer:</label>
            <input
              type="text"
              placeholder="Answer/Option Field"
              value={formData.answer}
              onChange={(e) => setFormData({ ...formData, answer: e.target.value })} />
            <label>Correct Answer:</label>
            <input
              type="text"
              placeholder="Enter correct answer/option"
              value={formData.correctAnswer}
              onChange={(e) => setFormData({ ...formData, correctAnswer: e.target.value })} />
          </div>
        )}
        {questionType === 'mcq' && (
          <div className="form-group">
            <label>Options:</label>
            {formData.options.map((option, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Option ${index + 1}`}
                value={option}
                onChange={(e) => {
                  const newOptions = [...formData.options];
                  newOptions[index] = e.target.value;
                  setFormData({ ...formData, options: newOptions });
                }} />
            ))}
          </div>
        )}
        {questionType === 'true-false' && (
          <div className="form-group">
            <label>Answer:</label>
            <label>
              <input
                type="radio"
                name="true-false"
                value="true"
                checked={formData.answer === 'true'}
                onChange={(e) => setFormData({ ...formData, answer: e.target.value })} /> True
            </label>
            <label>
              <input
                type="radio"
                name="true-false"
                value="false"
                checked={formData.answer === 'false'}
                onChange={(e) => setFormData({ ...formData, answer: e.target.value })} /> False
            </label>
          </div>
        )}
      </div>
      <div className="buttons">
        <button className="add" onClick={handleAdd}>+</button>
        <button className="save" onClick={handleSave}>Save</button>
        <button className="reset" onClick={handleReset}>Reset</button>
        <button className="delete" onClick={handleReset}>🗑️</button>
        <button className="back" onClick={handleReset}>←</button>
      </div>
    </div>
  );
}

export default QuestionForm;
