import React, { useContext } from 'react';
import { QuizContext } from './context/quiz';
import CategoryChange from './components/CategoryChange';
import Question from './components/Question';
import Agreement from './components/Agreement';

import './styles/app.css';
import './styles/checked.css';

function App() {
  const { categoryLanguage, screenChange } = useContext(QuizContext);

  return (
    <div>
      <header>
        <h3>QUESTIONÁRIO</h3>
      </header>
      <main>
        {
          categoryLanguage === ''
            ? <CategoryChange />
            : (!screenChange ? <Agreement /> : <Question />)
        }
      </main>
    </div>
  );
}

export default App;
