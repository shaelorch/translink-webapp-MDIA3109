import styled from "styled-components";

const TextCont = styled.div`
    font-family: "ArialPlaceholderBeforeFiraIsLoaded", Helvetica, sans-serif;
    background-color:white;
    color:#183152;
    font-weight:bold;
    padding-top:50px;
    padding-bottom:10px;
    
`

export default function Text() {

    return <TextCont>
        <h2>Skytrain Stations</h2>
    </TextCont>

}