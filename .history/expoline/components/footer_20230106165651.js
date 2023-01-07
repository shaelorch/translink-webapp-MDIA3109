import styled from "styled-components";

const FooterCont = styled.div`
    background-color: #C4E9FB;
    width:100%;
    height:400px;
    display:flex;
`

const Logo = styled.img`
    width: 120px;
    height:60px;
    display:flex;
    justify-content:left;
        
`

export default function Footer() {

    return <FooterCont>
        <Logo src="./translink.png"/>
        <p>

        </p>

    </FooterCont>
}