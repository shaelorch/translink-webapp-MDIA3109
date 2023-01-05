import styled from "styled-components"

const HeaderCont = styled.div`
    width:100%;

`

const Logo = styled.img`
    width: 100px;
    height:100%;
    display:sticky;
    justify-content:left;
`



export default function Header() {

    return <HeaderCont>
        <Logo src="./translink.png"/>
    </HeaderCont>

    
}

