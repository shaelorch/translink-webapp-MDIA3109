import styled from "styled-components";

const FooterCont = styled.div`
    background-color: #C4E9FB;
    width:100%;
    height:400px;
    display:flex;
`

const Logo = styled.img`
    width: 140px;
    height:70px;
    display:flex;
    justify-content:left;
    margin-top:30px;
        
`

export default function Footer() {

    return <FooterCont>
        <Logo src="./translink.png"/>
        <p>

        </p>

    </FooterCont>
}