import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [isChecked, setIsChecked] = useState(false);
  const [screenChange, setscreenChange] = useState(false);
  const value = useMemo(() => ({
    isChecked,
    setIsChecked,
    screenChange,
    setscreenChange,
  }), [isChecked, screenChange]);

  return (
    <QuizContext.Provider value={ value }>
      {children}
    </QuizContext.Provider>
  );
}

QuizProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
