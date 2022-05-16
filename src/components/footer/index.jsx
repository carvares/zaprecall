import { FooterStyle } from "./style"

export default function Footer({done}){
    console.log(done)
    return(
        <FooterStyle>
            <p>{done.length}/8 CONCLUÍDOS</p>
            <div>{done.map((each, index)=>{
               return <img src={each.props.src} alt={`icon ${index}`} />
            })}</div>
        </FooterStyle>
    )
}