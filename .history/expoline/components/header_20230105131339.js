import styled from "styled-components"

const HeaderCont = styled.div`
    width:100%;

`

const Logo = styled.img`
    width: 100px;
    height:100px;
`


export default function Header() {

    return <HeaderCont>
        <Logo src="/public/translink.png"/>
    </HeaderCont>

    
}

