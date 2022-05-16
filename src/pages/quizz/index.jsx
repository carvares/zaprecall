import SmallLogo from '../../assets/logo-pequeno.png';
import Question from '../../components/question';
import { useNavigate } from 'react-router-dom';
import QuizzStyle from './style';
import { useState } from 'react';
import Footer from '../../components/footer';
export default function Quizz() {
  const perguntas = [
    {pergunta: 'O que é JSX?', resposta: 'Uma extensão de linguagem do JavaScript' },
    {pergunta: 'O React é __', resposta: 'uma biblioteca JavaScript para construção de interfaces'},
    {pergunta: 'Componentes devem iniciar com __', resposta: 'letra maiúscula'},
    {pergunta: 'Podemos colocar __ dentro do JSX', resposta: 'expressões'},
    {pergunta: 'O ReactDOM nos ajuda __ ', resposta: 'interagindo com a DOM para colocar componentes React na mesma'},
    {pergunta: 'Usamos o npm para __  ', resposta: 'gerenciar os pacotes necessários e suas dependências'},
    {pergunta: 'Usamos props para __ ', resposta: 'passar diferentes informações para componentes '},
    {pergunta: 'Usamos estado (state) para __', resposta: 'dizer para o React quais informações quando '},
  ];
  const [done, setDone] = useState([]);
  console.log(done)
  let navigate = useNavigate();
  return (
    <QuizzStyle>
      <div className="logo">
        <img src={SmallLogo} alt='Logo pequena' />
        <h1
          onClick={() => {
            navigate('/');
          }}
        >
          ZapRecall
        </h1>
        </div>
      <div className='questions'>
        {perguntas.map((each,index) => {
          index += 1
          return <Question props={each} index={index} done={done} setDone={setDone} />;
        })}
      </div>
      <Footer done={done} />
    </QuizzStyle>
  );
}
