import styled from "styled-components";

const VolStyle = styled.div`
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
    padding-top: 1%;
    padding-bottom: 1.5%;
`;

const VolPlace = styled.div`
    padding-top: 1%;
    padding-bottom: 0.8%;
    color: #38598b;
    font-weight: bold;
    font-size: calc(2px + 1.8vw);
`;

const Subheaders = styled.div`
    font-weight: bold;
    font-size: calc(2px + 1.5vw);
    padding-top: 1%;
    padding-bottom: 0.5%;
`;

const Content = styled.div`
    padding-top: 1%;
    font-size: calc(2px + 1.4vw);
`;

export default function Volunteer() {
    return (
        <VolStyle>
            <PageTitle>VOLUNTEER EXPERIENCE</PageTitle>

            <VolPlace>Volunteer at Soup Kitchen</VolPlace>
            <Subheaders>June 2020 - Current | NJ</Subheaders>
            <Content>Responsibilities included packaging 100+ meals, organizing and distributing diapers, formula and
                    groceries, and interacting with local residents and staff.</Content>
            <br/>
            <br/>
            <VolPlace>Dance Teacher's Assistant and Company Mentor</VolPlace>
            <Subheaders>Sep. 2018 - May 2023 | NJ</Subheaders>
            <Content>Responsibilities included teaching choreography, providing corrections, interacting with dance
                    teachers and parents, and preparing 10-15 dancers for onstage performance.</Content>
        </VolStyle>
    );
}