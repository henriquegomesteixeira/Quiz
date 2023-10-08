import React, { useContext, useState } from 'react';
import data from '../data/questions_complete';
import { QuizContext } from '../context/quiz';

import '../styles/Question.css';
import '../styles/Options.css';

function Question() {
  const { categoryLanguage, resultOptions, setResultOptions,
    correctAnswer, setCorrectAnswer, setScreenResult,
    setDataQuestion } = useContext(QuizContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const getQuestions = () => {
    switch (categoryLanguage) {
    case 'html':
      return data[0].questions;
    case 'css':
      return data[1].questions;
    case 'js':
      return data[2].questions;
    default:
      return [];
    }
  };

  const questions = getQuestions();
  const { options, question, answer } = questions[currentQuestionIndex];

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const nextButton = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setScreenResult(true);
      setDataQuestion(questions);
    }
    setResultOptions([...resultOptions, selectedOption]);
    if (selectedOption === answer) {
      setCorrectAnswer([...correctAnswer, selectedOption]);
    }
  };

  return (
    <div id="questions">
      <h1>{question}</h1>
      <div id="options">
        {options.map((option, index) => (
          <div
            className="options correct"
            key={ index }
            onClick={ () => handleOptionClick(option) }
          >
            <label className="con" htmlFor={ `radioInput${index}` }>
              <input
                type="checkbox"
                id={ `radioInput${index}` }
                checked={ selectedOption === option }
                onChange={ () => handleOptionClick(option) }
              />
              <div className="check" />
            </label>
            <h3>{option}</h3>
          </div>
        ))}
      </div>
      <div id="button">
        <button
          type="button"
          onClick={ nextButton }
        >
          <h3>Próxima</h3>
        </button>
      </div>
    </div>
  );
}

export default Question;
