import React, { useContext } from 'react';
import { QuizContext } from './context/quiz';
import './styles/app.css';
import './styles/checked.css';

import Question from './components/Question';
import CategoryChange from './components/CategoryChange';

function App() {
  const { screenChange } = useContext(QuizContext);

  return (
    <div>
      <header>
        <h3>QUESTIONÁRIO</h3>
      </header>
      <main>
        {
          !screenChange ? <CategoryChange /> : <Question />
        }
      </main>
    </div>
  );
}

export default App;
