import styled from 'styled-components';

const QuizzStyle = styled.div`
 @media (min-width: 1000px) {
                width: 50vw;
                padding: 100px 0;
        }
    @media (min-width: 1200px) {
            width: 30vw;
            padding: 100px 0;
    }
    width: 90vw;
    height: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 80px auto;
    padding: 50px 0;
    .logo{
        display:flex;
        font-family: 'Righteous', cursive;
        display:flex;
        align-items: center;
        justify-content: center;
        img{
            margin: 0 10px;
        }
        h1{
            font-size: 2rem;
            color: #ffffff;
        }
    }
    .questions{
        width:100%;
    }
`

export default QuizzStyle;