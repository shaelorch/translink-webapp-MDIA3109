import styled from "styled-components";

const InputCont = styled.div`
    width:100%;
    height:250px;
    background-color:#C4E9FB;
    display:flex;
    flex-direction:row;
    padding-top:20px;
    justify-content:space-between;
    
`

const Input = styled.input`
    width:200px;
    height:40px;
    background-color:white;
    border:white;
    border-radius:5px;
`

export default function Inputs(){

    return <InputCont>
    <div style={{flexDirection:"column", marginLeft:20}}>
        <p style={{color:"#183152", fontFamily:"Helvetica, sans-serif", paddingTop:20, fontWeight:'bold'}}>Subscribe to the TransLink Monthly Updates newsletter to receive the latest news, projects, transit service changes and other initiatives. You may unsubscribe at any time.</p>
    </div>
    <div style={{flexDirection:"column", marginLeft:20}}>
        <Input placeholder="First Name"></Input>
    </div>
    <div style={{flexDirection:"column", marginLeft:20}}>
        <Input placeholder="Email Address"></Input>
    </div>
    
    </InputCont>
}