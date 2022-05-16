import styled from 'styled-components';

const QuestionStyle =  styled.div`
    width: 100%;
    /* min-width: 400px;
    max-width: 550px; */
    min-height: ${props => props.start?'135px' : '65px'};
    font-family: 'Recursive';
    background-color: ${props => props.start? '#FFFFD4': '#FFFFFF'};;
    border-radius: 5px;
    position:relative;
    padding: 10px;
    margin: 15px auto;
    display: ${props => props.start? 'block' : 'flex' };
    align-items:  ${props => props.start? 'none': 'center' };
    justify-content: space-between;
    img{
        position:${props => props.start?  'absolute': 'block'};
        width: ${props => props.start? '30px' : '20px'};
        height: auto;
        right: 10px;
        bottom: 10px;
    }
    p{
        max-width: 80%;
        font-size: 1.2em;
        font-family: 'Recursive';
        font-weight: 700;
        &.wrong{
            color:#FF3030;
            text-decoration: line-through;
        }
        &.almost{
            color:#FF922E;
            text-decoration: line-through;
        }
        &.correct{
            color:#2FBE34;
            text-decoration: line-through;
        }
        
    }
    .answers {
        position: absolute;
        bottom: 10px;
        left: 10px;
        right: 10px;
        display: flex;
        justify-content: space-evenly;
        button {
            width: 30%;
            height: 38px; 
            color: #ffffff;
            border: none;
            border-radius: 5px;
            font-family: 'Recursive';
            font-size: 0.9em;
            &.wrong{
                background-color: #FF3030;
            }
            &.almost{
                background-color: #FF922E;
            }
            &.correct{
                background-color: #2FBE34;
            }
        }
    }
`

export default QuestionStyle;