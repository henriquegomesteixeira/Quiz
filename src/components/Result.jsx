import React, { useContext, useState } from 'react';
import { QuizContext } from '../context/quiz';

import correct from '../img/correct.png';
import incorrect from '../img/remove.png';
import correct2 from '../img/check.png';
import incorrect2 from '../img/wrong.png';
import arrowDown from '../img/arrow-down.png';
import arrowUp from '../img/arrow-up.png';

import '../styles/Result.css';

function Result() {
  const { categoryLanguage, correctAnswer, resultOptions,
    setCategoryLanguage, setResultOptions, setCorrectAnswer,
    setScreenResult, dataQuestion } = useContext(QuizContext);
  const [expandableText, setExpandableText] = useState(null);
  const [expandedQuestion, setExpandedQuestion] = useState(false);

  const percentCorrect = (correctAnswer.length / resultOptions.length) * 100;

  const clearQuiz = () => {
    setCategoryLanguage('');
    setResultOptions([]);
    setCorrectAnswer([]);
    setScreenResult(false);
  };

  const buttonAnswerKey = () => {
    if (!expandedQuestion) {
      setExpandedQuestion(true);
    } else {
      setExpandedQuestion(false);
    }
  };

  const correctOrIncorrect = (question, option, index) => {
    if (option === question.answer) {
      return <img className="img2" src={ correct2 } alt="correto" />;
    }
    if (resultOptions[index] === option) {
      return <img className="img2" src={ incorrect2 } alt="incorreto" />;
    }
  };

  const space = (question, option, index) => {
    if (option === question.answer) {
      return 'correct';
    }
    if (resultOptions[index] === option) {
      return 'incorrect';
    }
    return 'p';
  };

  return (
    <div>
      <h1>Quiz de Programação - Resultado</h1>
      <div id="result">
        <h2>{percentCorrect.toFixed(2)}%</h2>
        <p>{correctAnswer.length} de {resultOptions.length} correta(s)</p>
        <p>Linguagem: {categoryLanguage.toUpperCase()}</p>
        <p>Parabéns por chegar até aqui!</p>
        <div id="button">
          <button onClick={ buttonAnswerKey }>
            Mostra gabarito
          </button>
          <button onClick={ clearQuiz }>
            Volta ao inicio
          </button>
        </div>
        {
          expandedQuestion && (
            <div id="anserKey">
              {
                dataQuestion.map((question, index) => (
                  <div key={ index } className="mapQuestionAnserKey">
                    <div
                      className="questionAnserKey"
                      onClick={ () => setExpandableText(index) }
                    >
                      {
                        correctAnswer.includes(question.answer)
                          ? <img className="img" src={ correct } alt="correto" />
                          : <img className="img" src={ incorrect } alt="incorreto" />
                      }
                      <h3 className="h3">
                        {question.question}
                      </h3>
                      {
                        expandableText === index ? (
                          <img className="arrow" src={ arrowUp } alt="arrow" />)
                          : (<img className="arrow" src={ arrowDown } alt="arrow" />)
                      }
                    </div>
                    {expandableText === index && (
                      question.options.map((option, index2) => (
                        <div className="optionsCorrectOrIncorrect" key={ index2 }>
                          {
                            correctOrIncorrect(question, option, index)
                          }
                          <p className={ `${space(question, option, index)}` }>
                            {option}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Result;
