import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [isChecked, setIsChecked] = useState(false);
  const [screenChange, setScreenChange] = useState(false);
  const [categoryLanguage, setCategoryLanguage] = useState('');
  const [resultOptions, setResultOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [screenResult, setScreenResult] = useState(false);
  const [dataQuestion, setDataQuestion] = useState();
  const [counterSwitch, setCounterSwitch] = useState(false);

  const value = useMemo(() => ({
    isChecked,
    setIsChecked,
    screenChange,
    setScreenChange,
    categoryLanguage,
    setCategoryLanguage,
    resultOptions,
    setResultOptions,
    correctAnswer,
    setCorrectAnswer,
    screenResult,
    setScreenResult,
    dataQuestion,
    setDataQuestion,
    counterSwitch,
    setCounterSwitch,
  }), [isChecked, screenChange, categoryLanguage,
    resultOptions, correctAnswer, screenResult, dataQuestion,
    counterSwitch]);

  return (
    <QuizContext.Provider value={ value }>
      {children}
    </QuizContext.Provider>
  );
}

QuizProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
