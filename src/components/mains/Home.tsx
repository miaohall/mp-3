import styled from "styled-components";

const MainStyle = styled.main`
    width: 70%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    height: 100vh;
    padding: 2% 4%;
    font-size: calc(2px + 1.5vw);
    
    @media screen and (max-width: 1000px){
        width: 100%;
    }
`;

/*fix headshot dimensions*/
const SizeImg = styled.img`
    max-width: 40%;
    max-height: 55%;
    margin: 4%;
`;

const WelcomeText = styled.div`
    color: #113f67;
    font-weight: bold;
    font-size: calc(2px + 1.7vw);
`;


export default function Home() {
    return (
        <MainStyle>
            <WelcomeText>Welcome! A little bit about me...</WelcomeText>
            <SizeImg src="../../../public/headshot.jpg" alt="Mia O'Halloran"/>
            <p>
                My name is Mia O'Halloran and I am a junior at Boston University studying Data Science and minoring in
                Computer Science.
                Welcome to my online resume! Here you will find my education, work and volunteer experience, projects,
                and certifications.<br/>
                I am interested in pursuing data analytics, UI/UX design or Web dev.
                In my free time, I love dance, photography, museums, architecture, interior design and exploring Boston!
            </p>
        </MainStyle>
    );
}