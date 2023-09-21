import React, { useContext } from 'react';
import { QuizContext } from '../context/quiz';

function Agreement() {
  
  const { isChecked, setIsChecked, setscreenChange } = useContext(QuizContext);

  const handleDivClick = () => {
    setIsChecked(true);
    setTimeout(() => {
      setscreenChange(true);
    }, 1000);
  };

  return (
    <div className='agreement'>
      <h1>Precisamos do seu consentimento</h1>
      <ul>
        <li>Tenho entre 18 e 65 anos e moro no Brasil;</li>
        <li>Confirmo que todas as informações que disponibilizarei são minhas e estou sendo honesto;</li>
        <li>Li e concordo com a <strong>Política de dados pessoais</strong> e <strong>Termos e condições de uso</strong>;</li>
        <li>
          Estou ciente de que meus dados pessoais serão coletados e tratados pela Quiz,
          nos termos da Política de Dados e do Política de Retenção de Descarte
        </li>
      </ul>
      <div className='interaction'>
        <div className='radio' id='radioDiv' onClick={handleDivClick}>
          <label className="container">
            <input type="checkbox" id='radioInput' checked={isChecked} onChange={handleDivClick}/>
            <div className="checkmark"></div>
          </label>
          <h3>Sim, eu concordo</h3>
        </div>
      </div>
    </div>
  )
};

export default Agreement;
