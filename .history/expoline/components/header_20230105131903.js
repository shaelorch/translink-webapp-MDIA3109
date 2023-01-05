import styled from "styled-components"

const HeaderCont = styled.div`
    width:100%;
    padding-top:3%;
    padding-bottom:3%;
    padding-left:1%;
`

const Logo = styled.img`
    width: 100px;
    height:100%;
    display:absolute;
    justify-content:left;
`



export default function Header() {

    return <HeaderCont>
        <Logo src="./translink.png"/>
    </HeaderCont>

    
}

