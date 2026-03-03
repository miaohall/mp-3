import {Link} from "react-router";
import styled from "styled-components";

const NavStyle = styled.nav`
    width: 30%;
    background-image: linear-gradient(to top, #38598b, #a2a8d3, #e7eaf6);
    
    @media screen and (max-width: 1000px){
        width: 100%;
    }
`;

const ListStyle = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1000px){
        flex-direction: row;

    }
`;

const ListItemStyle = styled.li`
    background-color: #38598b;
    margin: 5% auto;
    width: 80%;
    padding: 4%;
    text-align: center;
    border-radius: 20px;
    box-sizing: border-box;
    
    &:hover {
        background-color: #a2a8d3;
        border-style: solid;
        border-color: #38598b;
    }

    @media screen and (max-width: 1000px){
        width: 20%;
        margin: 2% 1%;
        padding: 2%;
    }
`;

const LinkStyle = styled(Link)`    
    color: #e7eaf6;
    font-size: calc(2px + 1.7vw);
    text-decoration: none;
    
    &:hover {
        color: #38598b;
        font-size: calc(2px + 1.7vw);
        text-decoration: none;
    }

    @media screen and (max-width: 1000px){
        font-size: calc(2px + 1.7vw);
    }
`;

export default function Nav() {
    return(
        <NavStyle>
            <ListStyle>
                <ListItemStyle>
                    <li><LinkStyle to="/">Home</LinkStyle></li>
                </ListItemStyle>
                <ListItemStyle>
                    <li><LinkStyle to="education.html">Education</LinkStyle></li>
                </ListItemStyle>
                <ListItemStyle>
                    <li><LinkStyle to="experiences.html">Experiences</LinkStyle></li>
                </ListItemStyle>
                <ListItemStyle>
                    <li><LinkStyle to="volunteer-work.html">Volunteering</LinkStyle></li>
                </ListItemStyle>
                <ListItemStyle>
                    <li><LinkStyle to="projects.html">Projects</LinkStyle></li>
                </ListItemStyle>
                <ListItemStyle>
                    <li><LinkStyle to="skills.html">Skills</LinkStyle></li>
                </ListItemStyle>
            </ListStyle>
        </NavStyle>
    );
}