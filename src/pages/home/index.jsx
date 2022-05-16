import bigLogo from "../../assets/logo.png";
import HomeStyle from "./style";
import {useNavigate} from 'react-router-dom';
export default function Home(){
    let navigate = useNavigate();
    return(
        <HomeStyle>
        <img src={bigLogo} alt='big logo'/>
        <h1>ZapRecall</h1>
        <button onClick={()=>navigate('/questions')}>Iniciar Recall!</button>
        </HomeStyle>
    )
}