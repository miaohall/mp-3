import styled from "styled-components";

const EduStyle = styled.div`
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

const School = styled.div`
    padding-top: 1%;
    padding-bottom: 0.5%;
    color: #38598b;
    font-weight: bold;
    font-size: calc(2px + 1.7vw);
`;

const PageTitle = styled.div`
    color: #113f67;
    font-weight: bold;
    font-size: calc(2px + 2vw);
`;

const Subheaders = styled.div`
    font-weight: bold;
    font-size: calc(2px + 1.4vw);
    padding-top: 1%;
`;

const Content = styled.div`
    padding-top: 0.5%;
    font-size: calc(2px + 1.3vw);
`;

export default function Education() {
    return (
        <EduStyle>
            <div>
                <PageTitle>EDUCATION</PageTitle>
                <br/>
                <School>Boston University</School>
                <Subheaders>2023 - 2027</Subheaders>
                <Subheaders>BS in Data Science, Minor in Computer Science | GPA: 3.88</Subheaders>
                <br/>
                <Subheaders>Activities:</Subheaders>
                <Content>Edge Dance Company, Kappa Theta Pi Professional Technology Fraternity</Content>
                <br/>
                <Subheaders>Relevant Coursework:</Subheaders>
                <Content>Machine Learning and AI, Web Application Development, Business Modeling with
                    Spreadsheets, Algorithms, Database Mechanics,
                    Linear Algebra, Probability in Computing, Statistics, Computer Systems, Discrete Math, Data
                    Structures, Python for Data Science Applications </Content>
                <br/>
                <br/>
                <School>Union County Academy for Information Technology</School>
                <Subheaders>2019-2023</Subheaders>
            </div>
        </EduStyle>
    );
}