import React, { useContext } from 'react';
import { QuizContext } from '../context/quiz';

function Result() {
  const { categoryLanguage, correctAnswer, resultOptions } = useContext(QuizContext);

  const percentCorrect = (correctAnswer.length / resultOptions.length) * 100;

  return (
    <div>
      <h1>Quiz de Programação - Resultado</h1>
      <h3>{percentCorrect.toFixed(2)}%</h3>
      <p>Linguagem: {categoryLanguage}</p>
      <p>{correctAnswer.length} de {resultOptions.length} correta(s)</p>
      <button>Mostra gabarito</button>
    </div>
  );
}

export default Result;
