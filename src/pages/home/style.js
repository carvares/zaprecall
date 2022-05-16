import styled from 'styled-components';

const HomeStyle = styled.div`
    width: 100%;
    height:100%;
    padding: 150px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    img{
        width: 20%;
        min-width:150px;
        max-width: 200px;
        height: auto;
        margin: 0 0 20px 0;
    }
    h1{
        font-family: 'Righteous', cursive;
        font-size: 4rem;
        color: #ffffff;
        margin: 0 0 20px 0;

    }
    button{
        width: 50%;
        min-width: 200px;
        max-width: 300px;
        aspect-ratio: 4/1;
        border: 1px solid #D70900;
        border-radius: 5px;
        color:#D70900;
        font-family: 'Recursive';
        font-size: 1.5rem;
        cursor: pointer;
    }
`
export default HomeStyle;