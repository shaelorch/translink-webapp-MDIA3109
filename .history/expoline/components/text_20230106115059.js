import styled from "styled-components";

const TextCont = styled.div`
    font-family: Helvetica, sans-serif;
    background-color:white;
    color:#183152;
    font-weight:bold;
    padding-top:50px;
    padding-bottom:20px;
    display:flex;
    align-content:left;
    
`

export default function Text() {

    return <TextCont>
        <h1>Skytrain Stations</h1>
    </TextCont>

}