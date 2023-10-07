import React, { useContext } from 'react';
import { QuizContext } from './context/quiz';
import CategoryChange from './components/CategoryChange';
import Question from './components/Question';
import Agreement from './components/Agreement';
import Result from './components/Result';

import './styles/app.css';

function App() {
  const { categoryLanguage, screenChange, screenResult } = useContext(QuizContext);

  return (
    <div>
      <header>
        <h3>QUESTIONÁRIO</h3>
      </header>
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
