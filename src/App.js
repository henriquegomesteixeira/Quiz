import React, { useContext } from 'react';
import { QuizContext } from './context/quiz';
import CategoryChange from './components/CategoryChange';
import Question from './components/Question';
import Agreement from './components/Agreement';
import Result from './components/Result';
import data from './data/questions_complete';

import './styles/app.css';

function App() {
  const { categoryLanguage, screenChange,
    screenResult, resultOptions, counterSwitch } = useContext(QuizContext);

  const getQuestions = () => {
    switch (categoryLanguage) {
    case 'html':
      return data[0].questions.length;
    case 'css':
      return data[1].questions.length;
    case 'js':
      return data[2].questions.length;
    default:
      return [];
    }
  };

  return (
    <div>
      <header>
        <h3 id="headerTitle">QUESTIONÁRIO</h3>
      </header>
      <div>
        {
          counterSwitch
            && <h3 id="headerCount">{resultOptions.length + 1}/{getQuestions()}</h3>
        }
      </div>
      <main>
        {
          categoryLanguage === ''
            ? <CategoryChange />
            : (!screenChange ? <Agreement />
              : (!screenResult ? <Question /> : <Result />))
        }
      </main>
    </div>
  );
}

export default App;
