import styled from "styled-components";

const InputCont = styled.div`
    width:100%;
    height:250px;
    background-color:#C4E9FB;
    display:flex;
    flex-direction:row;

`

const Input = styled.input`
    width:30%;
    height:20px;
`

export default function Inputs(){

    return <InputCont>
    <div>
        <p style={{color:"#183152", fontFamily:"Helvetica, sans-serif", paddingTop:20, fontWeight:'bold'}}>Subscribe to the TransLink Monthly Updates newsletter to receive the latest news, projects, transit service changes and other initiatives. You may unsubscribe at any time.</p>
    </div>
    
    </InputCont>
}