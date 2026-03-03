import styled from "styled-components";

const HeaderStyle = styled.footer`
    padding: 1%;
    background-color: #38598b;
    color: white;
    text-shadow: 1px 1px #a2a8d3;

    @media screen and (max-width: 1000px){
        width: 100%;
        text-align: center;
    }
`;


export default function Header() {
    return(
        <HeaderStyle>
            <h1>Mia O'Halloran</h1>
            <p>My Online Resume</p>
        </HeaderStyle>
    );
}