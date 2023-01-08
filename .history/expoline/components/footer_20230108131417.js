import styled from "styled-components";

const FooterCont = styled.div`
    background-color: #C4E9FB;
    width:100%;
    height:400px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding-top:40px;
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
        <hr class="solid"/>
        <div style={{display:"flex", flexDirection:"column", marginLeft:20}}>
            <Logo src="./translink.png"/>
            <p style={{color:"#183152", fontFamily:"Helvetica, sans-serif"}}>Metro Vancouver's transportation network, serving residents and visitors with public transit, major roads, bridges and Trip Planning.</p>
        </div>
        <div style={{display:"flex", flexDirection:"column", marginLeft:20}}>
            <h2 style={{color:"#183152", fontFamily:"Helvetica, sans-serif", marginBottom:20}}>Getting Around</h2>
            <p style={{color:"#183152", fontFamily:"Helvetica, sans-serif", marginBottom:20, fontWeight:"bold"}}>Transit Fares</p>
            <p style={{color:"#183152", fontFamily:"Helvetica, sans-serif", marginBottom:20,fontWeight:"bold"}}>Schedules</p>
            <p style={{color:"#183152", fontFamily:"Helvetica, sans-serif", marginBottom:20,fontWeight:"bold"}}>Rider Info</p>
            <p style={{color:"#183152", fontFamily:"Helvetica, sans-serif", marginBottom:20, fontWeight:"bold"}}>Transit Alerts</p>
        </div>
        <div style={{display:"flex", flexDirection:"column", marginLeft:20}}>
            <h2 style={{color:"#183152", fontFamily:"Helvetica, sans-serif", marginBottom:20}}>Resources</h2>
            <p style={{color:"#183152", fontFamily:"Helvetica, sans-serif", marginBottom:20, fontWeight:"bold"}}>Contact Us</p>
            <p style={{color:"#183152", fontFamily:"Helvetica, sans-serif", marginBottom:20,fontWeight:"bold"}}>Careers</p>
            
        </div>
        <div style={{display:"flex", flexDirection:"column", marginLeft:20}}>
            <h2 style={{color:"#183152", fontFamily:"Helvetica, sans-serif", marginBottom:20}}>Contact Us</h2>
            <p style={{color:"#183152", fontFamily:"Helvetica, sans-serif", marginBottom:20}}>Call us at 604.953.3333</p>
            <p style={{color:"#183152", fontFamily:"Helvetica, sans-serif", marginBottom:20}}>400-287 Nelson's Ct., New Westminster, BC V3L0E7</p>
            
        </div>
        
        
        

        <p>

        </p>

    </FooterCont>
}