import React, { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import js from '../img/js.png';
import html from '../img/html.png';
import css from '../img/css.png';

import '../styles/Category.css';

function CategoryChange() {
  const { setCategoryLanguage } = useContext(QuizContext);

  const handleClick = (language) => {
    setCategoryLanguage(language);
  };

  return (
    <div>
      <h1>Escolha uma das linguagens ao qual deseja responder</h1>
      <div className="CategoryChange">
        <label htmlFor="html" onClick={ () => handleClick('html') }>
          <img src={ html } alt="HTML" id="html" />
          <p id="html">HTML</p>
        </label>
        <label htmlFor="css" onClick={ () => handleClick('css') }>
          <img src={ css } alt="CSS" id="css" />
          <p id="css">CSS</p>
        </label>
        <label htmlFor="js" onClick={ () => handleClick('js') }>
          <div>
            <img src={ js } alt="JavaScript" id="js" />
          </div>
          <div>
            <p id="js">JavaScript</p>
          </div>
        </label>
      </div>
    </div>
  );
}

export default CategoryChange;
