import styled from "styled-components"

const HeaderCont = styled.div`
    width:100%;

`

const Logo = styled.img`
    width: 100%;
    height:100%;
`


export default function Header() {

    return <HeaderCont>
        <Logo src="./translink.png"/>
    </HeaderCont>

    
}

