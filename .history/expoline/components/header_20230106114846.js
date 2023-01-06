import styled from "styled-components"
import { AiOutlineMenu } from "react-icons/ai"
import { Edu_NSW_ACT_Foundation, Righteous } from "@next/font/google"

const HeaderCont = styled.div`
    width:100%;
    padding-top:3%;
    padding-bottom:3%;
    padding-left:3%;
    background-color:white;
    border-bottom: 1px solid #D3D3D3;
    display:flex;
    align-items:center;
    justify-content:space-between;
    
`

const Logo = styled.img`
    width: 100px;
    height:100%;
    display:flex;
    justify-content:left;
        
`

const Text = styled.p`
    font-family: helvetica, sans-serif; 
    color: #005DAF;
    margin-right:-65%;
    
`

const style = { color: "#005DAF", height:25, width:25, marginRight:"3%"}

export default function Header() {

    return <HeaderCont>
        <Logo src="./translink.png"/>
        <Text>Menu</Text>
       <AiOutlineMenu style={style}/>
    </HeaderCont>

    
}

