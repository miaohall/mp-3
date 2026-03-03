import styled from "styled-components";

const ExpStyle = styled.div`
    padding: 2% 4%;
    text-align: left;
    width: 70%;
    height: 100vh;
    display: flex;
    background-color: #e7eaf6;
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

const Company = styled.div`
    font-size: calc(2px + 1.2vw);
    font-weight: bold;
    color: #38598b;
    padding-top: 0.8%;
    padding-bottom: 0.8%;
`;

const Role = styled.div`
    font-size: calc(2px + 1vw);
    font-weight: bold;
    font-style: italic;
    padding-top: 0.8%;
    padding-bottom: 0.8%;
`;

const ExpBullets = styled.ul`
    font-size: calc(2px + 0.9vw);
    padding-top: 0.8%;
    padding-bottom: 0.8%;
`;


export default function Experiences() {
    return (
        <ExpStyle>
                <PageTitle>WORK EXPERIENCES</PageTitle>
                <Company>Boston University Faculty of Computing and Data Science</Company>
                <Role>Algorithms Course Grader | Jan. 2026 - Current | Boston, MA</Role>
                <ExpBullets>
                    <li>Graded weekly problem sets and exams for roughly 120 students in "Algorithms for Data Science"
                        course, ensuring timely and accurate feedback
                    </li>
                </ExpBullets>

                <br/>
                <Company>Elder Home Share and Dance Space</Company>
                <Role>Website Design and Development Intern | Oct. 2025 - Dec. 2025 | Dublin, Ireland</Role>
                <ExpBullets>
                    <li>Managed and enhanced three Wix-hosted websites with SEO-driven design improvements to increase
                        search visibility and user engagement for mobile and desktop users
                    </li>
                    <br/>
                    <li>Analyzed Google Analytics and Google Search Console traffic patterns to identify optimization
                        opportunities, resulting in data-driven improvements to site navigation and content
                    </li>
                    <br/>
                    <li>Created digital marketing assets using Canva and Instagram, strengthening brand presence</li>
                </ExpBullets>

                <br/>
                <Company>Endo, Inc. (now Keenova Therapeutics)</Company>
                <Role>IT Risk, Privacy, Governance & Security Intern | May 2025 - Aug. 2025 | Malvern, PA</Role>
                <ExpBullets>
                    <li>Conducted reviews on third-party vendor cybersecurity assessments to evaluate security
                        compliance and risk exposure
                    </li>
                    <br/>
                    <li>Enhanced third-party vendor intake process by refining risk classification criteria, increasing
                        accuracy in identifying inherent risk
                    </li>
                    <br/>
                    <li>Revised vendor cybersecurity assessments to align with pre-defined risk levels of vendors</li>
                    <br/>
                    <li>Built and maintained monthly KPI dashboards to provide executive leadership with insights into
                        cybersecurity posture and trends
                    </li>
                    <br/>
                    <li>Developed comprehensive IT Security training materials including new-hire education, specialized
                        spear phishing training to high-risk employees, and an Authentication masterclass for the CIO
                    </li>
                </ExpBullets>
        </ExpStyle>
    );
}