import styled from "styled-components"
import { AiOutlineMenu } from "react-icons/ai"

const HeaderCont = styled.div`
    width:100%;
    padding-top:3%;
    padding-bottom:3%;
    padding-left:3%;
    background-color:white;
    border-bottom: 1px solid #D3D3D3;
    display:flex;
    align-items:center;
    
`

const Logo = styled.img`
    width: 100px;
    height:100%;
    display:absolute;
    justify-content:left;
    display:flex;
    
`

const style = { color: "#005DAF", height:25, width:25, display:"relative"}

export default function Header() {

    return <HeaderCont>
        <Logo src="./translink.png"/>
       <AiOutlineMenu style={style}/>
    </HeaderCont>

    
}
