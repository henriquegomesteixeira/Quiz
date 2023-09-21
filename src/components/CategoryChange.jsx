import React from 'react';
import js from '../img/js.png';
import html from '../img/html.png';
import css from '../img/css.png';

function CategoryChange() {
  return (
    <div className="CategoryChange">
      <label htmlFor="html">
        <img src={ html } alt="HTML" id="html" />
        <h3 id="html">HTML</h3>
      </label>
      <label htmlFor="css">
        <img src={ css } alt="CSS" id="css" />
        <h3 id="css">CSS</h3>
      </label>
      <label htmlFor="js">
        <div>
          <img src={ js } alt="JavaScript" id="js" />
        </div>
        <div>
          <h3 id="js">JavaScript</h3>
        </div>
      </label>
    </div>
  );
}

export default CategoryChange;
