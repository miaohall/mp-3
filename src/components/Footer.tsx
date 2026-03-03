import {Link} from "react-router";
import styled from "styled-components";

const FooterStyle = styled.footer`
    width: 100%;
    background-color: #38598b;
    color: white;
`;

export default function Footer() {
    return(
        <FooterStyle>
            <p> All rights reserved by Mia O'Halloran &#169; <Link to="">Credits</Link></p>
        </FooterStyle>
    );
}