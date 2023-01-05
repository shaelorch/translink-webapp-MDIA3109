import styled from "styled-components"

const HeaderCont = styled.div`
    width:100%;
    padding-top:3%;
    padding-bottom:3%;

    background-color:white;
    border-bottom: 1px solid #D3D3D3;
    justidy-content:left;
    display:flex;
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
