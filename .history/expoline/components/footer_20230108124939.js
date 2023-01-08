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
    margin-left:20px;
        
`

export default function Footer() {

    return <FooterCont>
        <div style={{display:"flex", flexDirection:"column"}}>
            <Logo src="./translink.png"/>
            <p style={{color:"#183152", fontFamily:"Helvetica, sans-serif", marginLeft:100}}>Metro Vancouver's transportation network, serving residents and visitors with public transit, major roads, bridges and Trip Planning.</p>
        </div>
        

        <p>

        </p>

    </FooterCont>
}