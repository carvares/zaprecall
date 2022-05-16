import { useState } from 'react';
import Arrow from '../../assets/setinha.png';
import PlayIcon from '../../assets/play.png'
import QuestionStyle from './style';
import wrongIcon from '../../assets/wrong.png';
import almostIcon from '../../assets/almost.png';
import correctIcon from '../../assets/correct.png';
export default function Question({props,index,done, setDone}) {
    const [start, setStart] = useState(false);
    const [answer, setAnswer] =  useState(false)
    const [teste, setTeste] = useState(null)
    console.log(teste)
    function wrongAnswer(){
        setDone([...done, <img src={wrongIcon} alt="wrong icon" />])
        console.log(done)
        setTeste('wrong')
    }
    function almostAnswer(){
        setDone([...done, <img src={almostIcon} alt="almost icon" />])
        setTeste('almost')
    }
    function correctAnswer(){
        setDone([...done, <img src={correctIcon} alt="correct icon" />])
        setTeste('correct')
    }
    if(teste === 'wrong'){
        return(
        <QuestionStyle>
            <p className='wrong'>Pergunta {index}</p>
            <img src={wrongIcon}/>
        </QuestionStyle>

        )
    }
    if(teste === 'almost'){
        return(
        <QuestionStyle>
            <p className='almost'>Pergunta {index}</p>
            <img src={almostIcon}/>
        </QuestionStyle>

        )
    }
    if(teste === 'correct'){
        return(
        <QuestionStyle>
            <p className='correct'>Pergunta {index}</p>
            <img src={correctIcon}/>
        </QuestionStyle>

        )
    }
    return(
        
        <QuestionStyle start={start}>
            {start?
            (answer? <>
            <p className='afterTurn'>{props.resposta}</p>
            <div className='answers'> 
                <button className='wrong' onClick={wrongAnswer}>
                    Não lembrei
                </button>
                <button className='almost' onClick={almostAnswer}>
                    Quase não lembrei
                </button>
                <button className='correct' onClick={correctAnswer}>
                    Zap!
                </button>
            </div>
            </>:
            <>
            <p className='afterTurn'>{props.pergunta}</p>
            <img src={Arrow} alt="Setinha" onClick={() => setAnswer(!answer)}/>
            </>):
            <>
            <p className='beforeTurn'>Pergunta {index}</p>
            <img src={PlayIcon} alt="play-icon" onClick={()=>setStart(!start)} />
            </>
            }
        </QuestionStyle>
        

    )
} 