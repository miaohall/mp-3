import styled from "styled-components";

const SkillsStyle = styled.div`
    padding: 2% 4%;
    text-align: left;
    width: 70%;
    height: 100vh;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1000px){
        width: 100%;
    }
`;

const PageTitle = styled.div`
    color: #113f67;
    font-weight: bold;
    font-size: calc(2px + 2vw);
    padding-bottom: 1%;
`;

const Subheaders = styled.div`
    font-size: calc(2px + 1.8vw);
    font-weight: bold;
    color: #38598b;
    padding-top: 1%;
    padding-bottom: 1%;
`;

const Bullets = styled.ul`
    font-size: calc(2px + 1.5vw);
    padding-top: 0.8%;
    padding-bottom: 0.8%;
`;

const Content = styled.div`
    font-size: calc(2px + 1.5vw);
    padding-top: 0.8%;
    padding-bottom: 0.8%;
`;


export default function Skills() {
    return (
        <SkillsStyle>
                <PageTitle>SKILLS</PageTitle>

                <Subheaders>Certifications:</Subheaders>
                <Bullets>
                    <li>Java Certified Foundations Associate</li>
                    <br/>
                    <li>CompTIA IT Fundamentals</li>
                    <br/>
                    <li>Microsoft Office Specialist 2016 (Word, Word Expert, Excel, PowerPoint)</li>
                    <br/>
                    <li>IC3 Digital Literacy</li>
                </Bullets>
                <br/> <br/>
                <Subheaders>Programming Languages:</Subheaders>
                <Content>Python, Java, SQL, HTML, CSS</Content>
        </SkillsStyle>
    );
}