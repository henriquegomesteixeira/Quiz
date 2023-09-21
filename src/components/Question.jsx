import React from 'react';
import data from '../data/questions_complete';

function question() {
  return (
    <div>
      <h1>
        {
          data[0].question
        }
      </h1>
    </div>
  );
}

export default question;
