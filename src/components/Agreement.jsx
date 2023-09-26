import React, { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import '../styles/Agreement.css';

const timeForTheCheckboxToBeMarked = 1000;

function Agreement() {
  const { isChecked, setIsChecked, setscreenChange } = useContext(QuizContext);

  const handleClick = () => {
    setIsChecked(true);
    setTimeout(() => {
      setscreenChange(true);
    }, timeForTheCheckboxToBeMarked);
  };

  return (
    <div className="agreement">
      <h1>Precisamos do seu consentimento</h1>
      <ul>
        <li>
          Estou ciente que esse Quiz é um projeto de{' '}
          Henrique Gomes para fins de aprendizado;
        </li>
        <li>Tenho entre 18 e 65 anos e moro no Brasil;</li>
        <li>
          Li e concordo com a <strong>Política de dados pessoais</strong>{' '}
          e <strong>Termos e condições de uso</strong>;
        </li>
        <li>
          Estou ciente de que meus dados pessoais serão coletados e tratados pela Quiz,
          nos termos da Política de Dados e do Política de Retenção de Descarte
        </li>
      </ul>
      <div className="interaction">
        <div className="radio" id="radioDiv" onClick={ handleClick }>
          <label className="container" htmlFor="radioInput">
            <input
              type="checkbox"
              id="radioInput"
              checked={ isChecked }
              onChange={ handleClick }
            />
            <div className="checkmark" />
          </label>
          <h3>Sim, eu concordo</h3>
        </div>
      </div>
    </div>
  );
}

export default Agreement;
