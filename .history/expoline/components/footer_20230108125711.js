import styled from "styled-components";

const FooterCont = styled.div`
    background-color: #C4E9FB;
    width:100%;
    height:400px;
    display:flex;
    flex-direction:row;
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
            <p style={{color:"#183152", fontFamily:"Helvetica, sans-serif"}}>Metro Vancouver's transportation network, serving residents and visitors with public transit, major roads, bridges and Trip Planning.</p>
        </div>
        <div style={{display:"flex", flexDirection:"column"}}>
            <h2 style={{color:"#183152", fontFamily:"Helvetica, sans-serif", marginBottom:20}}>Getting Around</h2>
            <p style={{color:"#183152", fontFamily:"Helvetica, sans-serif"}}>Transit Fares</p>
            <p style={{color:"#183152", fontFamily:"Helvetica, sans-serif"}}>Schedules</p>
            <p style={{color:"#183152", fontFamily:"Helvetica, sans-serif"}}>Rider Info</p>
            <p style={{color:"#183152", fontFamily:"Helvetica, sans-serif"}}>Transit Alerts</p>
        </div>
        

        <p>

        </p>

    </FooterCont>
}